import { Shield, Award } from 'lucide-react';

const ppfCertImage = "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200";
const dealerCertImage = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200";

export function CertificationSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-semibold">V-KOOL官方授权</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">官方认证</span> · 品质保证
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-6">
            威固（V-KOOL）官方授权经销商 · 专业施工团队 · 正品保障
          </p>

          {/* Authorization Number */}
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37]/20 to-[#B8942C]/20 border-2 border-[#D4AF37] rounded-2xl px-8 py-4">
            <Award className="w-6 h-6 text-[#D4AF37]" />
            <div className="text-left">
              <div className="text-xs text-gray-400 mb-1">官方授权编号</div>
              <div className="text-2xl font-bold text-[#D4AF37] tracking-wider">VKWF0286</div>
            </div>
          </div>
        </div>

        {/* Certificates Display */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PPF Film Certificate */}
          <div className="group">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-slate-800">
                <img
                  src={ppfCertImage}
                  alt="V-KOOL PPF漆面保护膜官方授权证书"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  PPF漆面保护膜授权
                </h3>
                <p className="text-gray-400 text-sm">
                  V-KOOL官方授权 · 威固漆面保护膜认证施工店
                </p>
              </div>
            </div>
          </div>

          {/* Window Film Certificate */}
          <div className="group">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-slate-800">
                <img
                  src={dealerCertImage}
                  alt="V-KOOL窗膜官方授权经销商证书"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">
                  窗膜授权经销商
                </h3>
                <p className="text-gray-400 text-sm">
                  V-KOOL官方授权经销商 · 威固窗膜认证施工店
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <div className="text-white font-semibold mb-1">官方授权</div>
            <div className="text-gray-500 text-sm">正品保障</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <Award className="w-8 h-8 text-black" />
            </div>
            <div className="text-white font-semibold mb-1">专业认证</div>
            <div className="text-gray-500 text-sm">技术保证</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">6+</span>
            </div>
            <div className="text-white font-semibold mb-1">服务年限</div>
            <div className="text-gray-500 text-sm">经验丰富</div>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-2xl mx-auto mb-3 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">100%</span>
            </div>
            <div className="text-white font-semibold mb-1">客户满意</div>
            <div className="text-gray-500 text-sm">品质服务</div>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            开原市巧匠美车工作室 · V-KOOL威固官方授权施工店 · 授权编号：VKWF0286
          </p>
        </div>
      </div>
    </section>
  );
}
