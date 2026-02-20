import { useEffect, useState } from 'react';
import { getSupabase, CaseItem } from '../../lib/supabase';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Loader2 } from 'lucide-react';

// 虚拟案例数据（当数据库无案例时使用）
const MOCK_CASES: CaseItem[] = [
  {
    id: 'mock-1',
    title: '奔驰S级全车V-KOOL VK70贴膜',
    description: '全车采用V-KOOL旗舰系列VK70膜，前挡+四窗+天窗全覆盖，施工周期3小时，效果完美。车主反馈隔热效果显著，夏天车内温度明显降低。',
    car_model: '奔驰S级',
    film_type: 'V-KOOL VK70',
    image_url: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800',
    specs: {
      vlt: '70%',
      ir_rejection: '95%',
      uv_block: '99%',
    },
    created_at: new Date().toISOString(),
  },
  {
    id: 'mock-2',
    title: '宝马7系V-KOOL VP70前挡贴膜',
    description: '采用V-KOOL VP70前挡膜，高透光率配合出色隔热性能。专业技师标准化施工，无尘环境作业，质保10年。',
    car_model: '宝马7系',
    film_type: 'V-KOOL VP70',
    image_url: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    specs: {
      vlt: '72%',
      ir_rejection: '92%',
      uv_block: '99%',
    },
    created_at: new Date().toISOString(),
  },
  {
    id: 'mock-3',
    title: '奥迪A8全车V-KOOL KC35贴膜',
    description: '全车V-KOOL KC35系列，超高隔热率达96%，有效阻隔红外线。采用5S标准施工流程，品质保证。',
    car_model: '奥迪A8',
    film_type: 'V-KOOL KC35',
    image_url: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800',
    specs: {
      vlt: '35%',
      ir_rejection: '96%',
      uv_block: '99.9%',
    },
    created_at: new Date().toISOString(),
  },
  {
    id: 'mock-4',
    title: '保时捷卡宴V-KOOL X15顶级贴膜',
    description: '顶级V-KOOL X15系列，陶瓷纳米技术，超强隔热性能。前挡+全车窗完美覆盖，展现极致品质。',
    car_model: '保时捷卡宴',
    film_type: 'V-KOOL X15',
    image_url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800',
    specs: {
      vlt: '15%',
      ir_rejection: '98%',
      uv_block: '99.9%',
    },
    created_at: new Date().toISOString(),
  },
  {
    id: 'mock-5',
    title: '雷克萨斯ES V-KOOL VK25贴膜',
    description: 'V-KOOL VK25系列，平衡透光与隔热性能。专业技师精细施工，边角处理完美，车主满意度100%。',
    car_model: '雷克萨斯ES',
    film_type: 'V-KOOL VK25',
    image_url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    specs: {
      vlt: '25%',
      ir_rejection: '94%',
      uv_block: '99%',
    },
    created_at: new Date().toISOString(),
  },
  {
    id: 'mock-6',
    title: '路虎揽胜V-KOOL K35全车贴膜',
    description: '全车V-KOOL K35系列，高端SUV专属配置。隔热保温效果卓越，四季舒适驾乘体验。',
    car_model: '路虎揽胜',
    film_type: 'V-KOOL K35',
    image_url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    specs: {
      vlt: '35%',
      ir_rejection: '93%',
      uv_block: '99%',
    },
    created_at: new Date().toISOString(),
  },
];

export function CasesSection() {
  const [cases, setCases] = useState<CaseItem[]>([]);
  const [loading, setLoading] = useState(true);
  
  // 为无限滚动复制案例数组
  const displayCases = cases.length > 0 ? [...cases, ...cases, ...cases] : [];

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        // 如果没有Supabase配置，使用虚拟数据
        console.log('[CasesSection] Supabase未配置，使用虚拟数据');
        setCases(MOCK_CASES);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('[CasesSection] 加载案例出错:', error);
        throw error;
      }
      
      console.log('[CasesSection] 从数据库加载的案例数量:', data?.length || 0);
      
      // 如果数据库有案例，处理图片URL
      if (data && data.length > 0) {
        console.log('[CasesSection] 显示所有数据库案例');
        
        // 为没有图片URL的案例分配默认图片
        const casesWithImages = data.map((caseItem, index) => {
          if (!caseItem.image_url || caseItem.image_url === '') {
            console.warn(`[CasesSection] 案例 "${caseItem.title}" 没有图片URL，使用默认图片`);
            // 使用Unsplash的汽车图片作为默认图片
            const defaultImages = [
              'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1614162692292-7ac56d7f11e3?w=800&auto=format&fit=crop',
            ];
            return {
              ...caseItem,
              image_url: defaultImages[index % defaultImages.length]
            };
          }
          return caseItem;
        });
        
        setCases(casesWithImages);
      } else {
        // 数据库完全没有数据，使用虚拟数据
        console.log('[CasesSection] 数据库无案例，使用虚拟数据');
        setCases(MOCK_CASES);
      }
    } catch (error) {
      console.error('[CasesSection] Error loading cases:', error);
      // 出错时也使用虚拟数据
      setCases(MOCK_CASES);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="cases" className="py-20 bg-[#0a0a0a] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <div className="text-white">加载案例中...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="cases" className="py-20 bg-[#0a0a0a] overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">施工</span>案例展示
          </h2>
          <p className="text-gray-400">真实案例，品质保证 · V-KOOL官方授权门店</p>
        </div>
      </div>

      {/* 无限滚动容器 */}
      <div className="relative">
        {/* 左侧渐变遮罩 */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
        
        {/* 右侧渐变遮罩 */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

        {/* 滚动容器 */}
        <div
          className="flex gap-6 animate-infinite-scroll [animation-duration:50s]"
        >
          {displayCases.map((caseItem, index) => (
            <div
              key={`${caseItem.id}-${index}`}
              className="flex-shrink-0 w-[380px] group card-premium rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-[#D4AF37]/20"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-black/80">
                <div className="absolute inset-0 image-overlay-gradient z-[1] pointer-events-none" />
                <ImageWithFallback
                  src={caseItem.image_url}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 relative z-0"
                  onLoad={() => {
                    console.log(`[CasesSection] ✅ 图片加载成功: ${caseItem.title}`, caseItem.image_url);
                  }}
                  onError={() => {
                    console.error(`[CasesSection] ❌ 图片加载失败: ${caseItem.title}`, {
                      url: caseItem.image_url,
                      id: caseItem.id
                    });
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#D4AF37] bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full">
                    {caseItem.film_type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{caseItem.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {caseItem.description}
                </p>

                <div className="text-sm text-slate-500 mb-4">
                  车型：<span className="text-slate-300">{caseItem.car_model}</span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                  <span className="text-sm text-[#D4AF37] font-medium">查看详情 →</span>
                </div>
                {/* Specs */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-800/80">
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">透光率</div>
                    <div className="text-sm font-semibold text-white">
                      {caseItem.specs?.vlt || '-'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">隔热率</div>
                    <div className="text-sm font-semibold text-orange-400">
                      {caseItem.specs?.ir_rejection || '-'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-1">防UV</div>
                    <div className="text-sm font-semibold text-yellow-400">
                      {caseItem.specs?.uv_block || '-'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 提示文字 */}
      <div className="text-center mt-12">
        <p className="text-slate-500 text-sm">鼠标悬停暂停滚动 · 点击下方按钮手动暂停/继续</p>
        <button
          onClick={() => {
            const el = document.querySelector('.animate-infinite-scroll');
            if (el) {
              const style = (el as HTMLElement).style;
              style.animationPlayState = style.animationPlayState === 'paused' ? 'running' : 'paused';
            }
          }}
          className="mt-2 text-[#D4AF37] text-xs hover:underline"
        >
          暂停/继续
        </button>
      </div>
    </section>
  );
}