import { MapPin, Phone, Mail, Clock, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { AmapComponent } from './AmapComponent';
import { toast } from 'sonner';

const ADDRESS = '辽宁省铁岭市开原市溪桂路22号-5门市';
const PHONE = '13358971515';
const EMAIL = '1052775675@qq.com';
const MAP_SEARCH = 'https://uri.amap.com/marker?address=' + encodeURIComponent('辽宁省铁岭市开原市溪桂路22号-5门市');

export function ContactSection() {
  const AMAP_API_KEY = 'd0458a09d9331191b03e207c056016f4';
  const AMAP_SECURITY_CODE = 'd0458a09d9331191b03e207c056016f4';

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full px-6 py-2.5 mb-6 section-badge">
            <span className="text-sm text-[#D4AF37] font-semibold tracking-wide">联系我们</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">联系</span>我们
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">欢迎到店咨询体验 · 开原市巧匠美车工作室</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <a
              href={MAP_SEARCH}
              target="_blank"
              rel="noopener noreferrer"
              className="block card-premium rounded-2xl p-6 flex items-start gap-4 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#D4AF37]" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">门店地址</h3>
                <p className="text-gray-300 hover:text-[#D4AF37] transition-colors">{ADDRESS}</p>
                <p className="text-xs text-[#D4AF37]/80 mt-1">点击查看地图导航</p>
              </div>
              <button onClick={(e)=>{e.preventDefault();e.stopPropagation();navigator.clipboard.writeText(ADDRESS);toast.success('已复制地址');}} className="p-2 rounded-lg hover:bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0"><Copy className="w-4 h-4"/></button>
            </a>

            <a
              href={`tel:${PHONE}`}
              className="block card-premium rounded-2xl p-6 flex items-start gap-4 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#D4AF37]" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">联系电话</h3>
                <p className="text-gray-300 hover:text-[#D4AF37] transition-colors">133-5897-1515</p>
              </div>
              <button onClick={(e)=>{e.preventDefault();e.stopPropagation();navigator.clipboard.writeText(PHONE);toast.success('已复制电话');}} className="p-2 rounded-lg hover:bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0"><Copy className="w-4 h-4"/></button>
            </a>

            <a
              href={`mailto:${EMAIL}`}
              className="block card-premium rounded-2xl p-6 flex items-start gap-4 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 focus:ring-offset-[#0a0a0a]"
            >
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#D4AF37]" aria-hidden />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold mb-2">电子邮箱</h3>
                <p className="text-gray-300 hover:text-[#D4AF37] transition-colors break-all">{EMAIL}</p>
              </div>
              <button onClick={(e)=>{e.preventDefault();e.stopPropagation();navigator.clipboard.writeText(EMAIL);toast.success('已复制邮箱');}} className="p-2 rounded-lg hover:bg-[#D4AF37]/20 text-[#D4AF37] flex-shrink-0"><Copy className="w-4 h-4"/></button>
            </a>

            <div className="card-premium rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#D4AF37]" aria-hidden />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">营业时间</h3>
                <p className="text-gray-400">周一至周日 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="card-premium rounded-2xl overflow-hidden h-full min-h-[500px]">
            <AmapComponent
              apiKey={AMAP_API_KEY}
              securityJsCode={AMAP_SECURITY_CODE || undefined}
              address={ADDRESS}
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-3">周一至周日 9:00 - 18:00 · 欢迎到店体验</p>
          <a href={`tel:${PHONE}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8942C] hover:from-[#E5C158] hover:to-[#D4AF37] text-black font-semibold px-8 shadow-lg hover:shadow-[#D4AF37]/20 focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#0a0a0a] transition-all"
            >
              立即预约 · 拨打 133-5897-1515
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}