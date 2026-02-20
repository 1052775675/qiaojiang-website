import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { AmapComponent } from './AmapComponent';

export function ContactSection() {
  // 高德地图 - 在控制台 https://console.amap.com/ 申请
  // Key 在应用管理 -> 应用 -> 添加 Key（选择 Web端 JS API）
  // 安全密钥在应用管理 -> 安全设置 中获取（2021年12月后必填，否则地图瓦片无法加载）
  const AMAP_API_KEY = 'd0458a09d9331191b03e207c056016f4';
  const AMAP_SECURITY_CODE = 'd0458a09d9331191b03e207c056016f4'; // 高德安全密钥

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">联系</span>我们
          </h2>
          <p className="text-gray-400">欢迎到店咨询体验 · 开原市巧匠美车工作室</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">门店地址</h3>
                <p className="text-gray-400">
                  辽宁省铁岭市开原市溪桂路22号-5门市
                </p>
              </div>
            </div>

            <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">联系电话</h3>
                <p className="text-gray-400">133-5897-1515</p>
              </div>
            </div>

            <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">电子邮箱</h3>
                <p className="text-gray-400">1052775675@qq.com</p>
              </div>
            </div>

            <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">营业时间</h3>
                <p className="text-gray-400">周一至周日 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-black/60 border border-[#D4AF37]/30 rounded-2xl overflow-hidden h-full min-h-[500px]">
            <AmapComponent
              apiKey={AMAP_API_KEY}
              securityJsCode={AMAP_SECURITY_CODE || undefined}
              address="辽宁省铁岭市开原市溪桂路22号-5门市"
            />
          </div>
        </div>

        {/* Schema.org structured data placeholder */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
          >
            立即预约
          </Button>
        </div>
      </div>
    </section>
  );
}