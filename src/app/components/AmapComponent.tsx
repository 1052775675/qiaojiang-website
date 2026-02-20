import { useEffect, useRef, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface AmapComponentProps {
  address: string;
  apiKey?: string;
  /** 安全密钥 - 2021年12月后申请的Key必须配置，否则地图瓦片无法加载。在控制台 https://console.amap.com/ 应用管理 -> 安全设置 中获取 */
  securityJsCode?: string;
}

// 声明全局 AMap 类型
declare global {
  interface Window {
    AMap: any;
    _AMapSecurityConfig?: any;
  }
}

export function AmapComponent({ address, apiKey, securityJsCode }: AmapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const mapInstance = useRef<any>(null);
  const loadingTimeoutRef = useRef<any>(null);

  useEffect(() => {
    if (!apiKey) {
      setLoading(false);
      setError('未配置高德地图 API Key');
      return;
    }

    let mounted = true;
    let initTimeoutId: any = null;

    // 设置最大加载时间（10秒）
    loadingTimeoutRef.current = setTimeout(() => {
      if (mounted && loading) {
        console.warn('地图加载超时，强制完成');
        setLoading(false);
      }
    }, 10000);

    const initMap = async () => {
      try {
        // 等待容器渲染
        await new Promise(resolve => setTimeout(resolve, 100));

        if (!mounted || !mapContainer.current) {
          return;
        }

        // 加载高德地图SDK（安全密钥必须在脚本加载之前设置）
        if (!window.AMap) {
          await loadAmapScript(apiKey, securityJsCode);
        }

        if (!mounted || !mapContainer.current) {
          return;
        }

        console.log('开始创建地图实例...');

        // 创建地图实例
        const map = new window.AMap.Map(mapContainer.current, {
          zoom: 16,
          center: [124.0391, 42.5442], // 开原市溪桂路附近坐标
          viewMode: '2D',
          resizeEnable: true,
        });

        mapInstance.current = map;

        // 设置地理编码超时
        let geocodingDone = false;

        // 地图加载完成事件
        map.on('complete', () => {
          console.log('地图complete事件触发');
          
          if (!mounted) return;

          // 即使地理编码失败，也要显示地图
          setTimeout(() => {
            if (!geocodingDone && mounted) {
              console.log('地理编码超时，使用默认位置');
              addMarker(map, [124.0391, 42.5442]);
              setLoading(false);
            }
          }, 3000); // 3秒超时

          // 使用地理编码查找精确位置
          try {
            const geocoder = new window.AMap.Geocoder({
              city: '开原市',
            });

            geocoder.getLocation(address, (status: string, result: any) => {
              console.log('地理编码回调:', status, result);
              
              if (!mounted || geocodingDone) return;
              geocodingDone = true;

              if (status === 'complete' && result.geocodes?.length > 0) {
                const location = result.geocodes[0].location;
                console.log('找到精确位置:', location.lng, location.lat);
                map.setCenter([location.lng, location.lat]);
                addMarker(map, [location.lng, location.lat]);
              } else {
                console.log('地理编码失败，使用默认位置');
                addMarker(map, [124.0391, 42.5442]);
              }

              setLoading(false);
            });
          } catch (err) {
            console.error('地理编码错误:', err);
            geocodingDone = true;
            addMarker(map, [124.0391, 42.5442]);
            setLoading(false);
          }
        });

        // 添加错误事件监听
        map.on('error', (e: any) => {
          console.error('地图错误事件:', e);
        });

      } catch (err: any) {
        console.error('地图初始化错误:', err);
        if (mounted) {
          setError(err.message || '地图加载失败');
          setLoading(false);
        }
      }
    };

    // 延迟初始化，确保DOM已渲染
    initTimeoutId = setTimeout(initMap, 200);

    return () => {
      mounted = false;
      if (initTimeoutId) clearTimeout(initTimeoutId);
      if (loadingTimeoutRef.current) clearTimeout(loadingTimeoutRef.current);
      if (mapInstance.current) {
        try {
          mapInstance.current.destroy();
        } catch (e) {
          console.error('地图销毁失败:', e);
        }
      }
    };
  }, [apiKey, address, securityJsCode]);

  const loadAmapScript = (key: string, securityCode?: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      // 检查是否已有脚本
      const existing = document.querySelector('script[src*="webapi.amap.com"]');
      if (existing) {
        if (window.AMap) {
          console.log('AMap已加载');
          resolve();
        } else {
          existing.addEventListener('load', () => {
            console.log('AMap脚本加载完成');
            setTimeout(() => resolve(), 100);
          });
          existing.addEventListener('error', () => reject(new Error('SDK加载失败')));
        }
        return;
      }

      // 安全密钥必须在脚本加载之前设置，否则地图瓦片无法加载（显示灰色）
      if (securityCode) {
        window._AMapSecurityConfig = { securityJsCode: securityCode };
      }

      console.log('开始加载AMap SDK...');
      const script = document.createElement('script');
      script.src = `https://webapi.amap.com/maps?v=2.0&key=${key}&plugin=AMap.Geocoder`;
      script.async = true;

      script.onload = () => {
        console.log('AMap SDK加载成功');
        // 等待AMap对象完全初始化
        setTimeout(() => {
          if (window.AMap) {
            resolve();
          } else {
            reject(new Error('AMap对象未初始化'));
          }
        }, 100);
      };

      script.onerror = () => {
        reject(new Error('高德地图SDK加载失败，请检查网络或API Key'));
      };

      document.head.appendChild(script);
    });
  };

  const addMarker = (map: any, position: [number, number]) => {
    try {
      console.log('添加标记:', position);
      
      const marker = new window.AMap.Marker({
        position,
        title: '开原市巧匠美车工作室',
        animation: 'AMAP_ANIMATION_DROP',
      });

      map.add(marker);

      // 创建信息窗口
      const infoWindow = new window.AMap.InfoWindow({
        content: `
          <div style="padding: 16px; min-width: 220px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold; color: #1f2937;">
              开原市巧匠美车工作室
            </h3>
            <p style="margin: 0 0 4px 0; font-size: 14px; color: #6b7280;">
              ${address}
            </p>
            <p style="margin: 8px 0 0 0; font-size: 12px; color: #D4AF37;">
              V-KOOL官方授权施工店
            </p>
          </div>
        `,
        offset: new window.AMap.Pixel(0, -30),
      });

      // 点击标记显示信息
      marker.on('click', () => {
        infoWindow.open(map, marker.getPosition());
      });

      // 自动显示信息窗口
      setTimeout(() => {
        infoWindow.open(map, marker.getPosition());
      }, 500);

      console.log('标记添加成功');
    } catch (err) {
      console.error('添加标记失败:', err);
    }
  };

  if (error) {
    return (
      <div className="w-full h-full min-h-[500px] flex items-center justify-center bg-slate-900/30">
        <div className="text-center p-6">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-400" />
          <p className="text-slate-400 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-[#D4AF37] text-black rounded-lg hover:bg-[#B8942C] transition-colors font-semibold"
          >
            刷新页面
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[500px] relative">
      {/* 地图容器 */}
      <div
        ref={mapContainer}
        className="w-full h-full absolute inset-0"
        style={{ minHeight: '500px', background: '#1e293b' }}
      />

      {/* 加载遮罩 */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/50 z-10">
          <div className="text-center">
            <Loader2 className="w-12 h-12 mx-auto mb-4 text-[#D4AF37] animate-spin" />
            <p className="text-slate-300">正在加载地图...</p>
            <p className="text-slate-500 text-sm mt-2">如长时间未加载，请检查网络连接</p>
          </div>
        </div>
      )}
    </div>
  );
}
