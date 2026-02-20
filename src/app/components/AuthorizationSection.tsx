import { Shield, Award, CheckCircle2, FileCheck } from 'lucide-react';

const ppfAuthorizationPlaque = "/pics/1.jpg";
const windowFilmAuthorizationPlaque = "/pics/2.jpg";

export function AuthorizationSection() {
  return (
    <section id="authorization" className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-4">
            <Shield className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-semibold">官方授权</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">V-KOOL官方</span>授权认证
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
            正品保障 · 全国联保 · 可官网验证授权编号 VKWF0286
          </p>

          {/* Authorization Plaques - 两个授权牌 */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* PPF漆面保护膜授权 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-[#D4AF37]/30 rounded-2xl p-6">
              <div className="aspect-[3/2] mb-4 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={ppfAuthorizationPlaque}
                  alt="V-KOOL PPF漆面保护膜官方授权牌 - 授权编号VKWF0286"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">PPF漆面保护膜授权</div>
                <div className="text-gray-400 text-sm mt-1">V-KOOL官方授权 · 威固漆面保护膜认证施工店</div>
              </div>
            </div>
            {/* 窗膜授权经销商 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-[#D4AF37]/30 rounded-2xl p-6">
              <div className="aspect-[3/2] mb-4 flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={windowFilmAuthorizationPlaque}
                  alt="V-KOOL窗膜官方授权经销商 - 授权编号VKWF0286"
                  className="w-full h-full object-contain rounded-xl"
                />
              </div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">窗膜授权经销商</div>
                <div className="text-gray-400 text-sm mt-1">V-KOOL官方授权经销商 · 威固窗膜认证施工店</div>
              </div>
            </div>
          </div>
        </div>

        {/* Authorization Benefits */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10 border-2 border-[#D4AF37]/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            为什么选择<span className="text-[#D4AF37]">官方授权门店</span>？
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-white font-semibold mb-2">正品保障</div>
              <div className="text-gray-400 text-sm">
                100%原厂正品膜<br />杜绝假冒伪劣
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-white font-semibold mb-2">技术认证</div>
              <div className="text-gray-400 text-sm">
                技师经过V-KOOL官方培训<br />持Master of Master认证
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-white font-semibold mb-2">全国联保</div>
              <div className="text-gray-400 text-sm">
                质保期内全国门店通赔<br />无需担心售后
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div className="text-white font-semibold mb-2">可验真伪</div>
              <div className="text-gray-400 text-sm">
                V-KOOL官网可查授权编号<br />透明可追溯
              </div>
            </div>
          </div>
        </div>

        {/* Verification Guide */}
        <div className="mt-12 bg-black/60 border border-[#D4AF37]/30 rounded-2xl p-8">
          <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#D4AF37]" />
            如何验证授权真伪？
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold">
                1
              </div>
              <div>
                <div className="text-white font-semibold mb-1">访问官网</div>
                <div className="text-gray-400 text-sm">
                  登录 V-KOOL 官方网站<br />
                  <span className="text-[#D4AF37]">www.v-kool.cn</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold">
                2
              </div>
              <div>
                <div className="text-white font-semibold mb-1">查询授权</div>
                <div className="text-gray-400 text-sm">
                  进入"授权门店查询"<br />
                  输入授权编号或门店名称
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-[#D4AF37]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#D4AF37] font-bold">
                3
              </div>
              <div>
                <div className="text-white font-semibold mb-1">核对信息</div>
                <div className="text-gray-400 text-sm">
                  确认授权编号 VKWF0286<br />
                  门店名称及地址一致
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Warranty Coverage */}
        <div className="mt-12 bg-gradient-to-br from-[#D4AF37]/10 via-black/60 to-[#D4AF37]/5 border border-[#D4AF37]/40 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-2 justify-center">
            <FileCheck className="w-7 h-7 text-[#D4AF37]" />
            官方质保范围
          </h4>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Window Film Warranty */}
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all">
              <h5 className="text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                窗膜质保范围
              </h5>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>V-KOOL® 玻璃膜适应由经过适当授权和培训的 V-KOOL® 分销商按照制造商的操作指南正确地安装于适合的玻璃内面。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>经上述程序正确安装的 V-KOOL® 玻璃窗膜自安装之日起享有<span className="text-[#D4AF37] font-semibold"> 5-10 年质量保证</span>。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>V-KOOL® 玻璃窗膜将保持其品质，不产生裂纹或裂缝、不脱落、不起泡、不分层。</span>
                </li>
              </ul>
            </div>

            {/* PPF Warranty */}
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-6 hover:border-[#D4AF37]/50 transition-all">
              <h5 className="text-xl font-bold text-[#D4AF37] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                漆面保护膜质保范围
              </h5>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>为了保障您的消费权益，享受威固厂家的质保，您的 PPF 漆面保护膜必须从威固授权门店购买，并经威固授权贴膜技师施工，且在正常环境下使用。</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span>自购买日起的<span className="text-[#D4AF37] font-semibold"> 5-12 年</span>内，厂商对仅因制造或者材料缺陷造成的开裂、起泡损坏提供质保服务。</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Warranty Note */}
          <div className="mt-6 bg-black/30 border border-[#D4AF37]/20 rounded-lg p-4">
            <p className="text-gray-400 text-sm text-center">
              <span className="text-[#D4AF37]">💡 温馨提示：</span>具体质保年限以产品型号为准，质保期内全国授权门店通赔。请妥善保管质保卡及施工凭证。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}