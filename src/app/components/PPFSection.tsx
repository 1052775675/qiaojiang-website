import { Shield, Sparkles, Timer } from 'lucide-react';

interface PPFProduct {
  series: string;
  model: string;
  warranty: string;
  features: string;
  thickness?: string;
  recommended?: boolean;
}

const ppfProducts: PPFProduct[] = [
  {
    series: 'V10X系列',
    model: 'V10X',
    warranty: '12年',
    features: '第三代车衣，XTRA智能防御科技，双X交联分子',
    recommended: true,
  },
  {
    series: 'V100X系列',
    model: 'V100X',
    warranty: '12年',
    features: '厚度提升16.7%，耐穿刺',
  },
  {
    series: 'V10系列',
    model: 'V10',
    warranty: '10年',
    features: 'AquaCoat™科技，自修复功能',
  },
  {
    series: 'MATTE系列',
    model: 'MATTE',
    warranty: '10年',
    features: '哑光漆专用',
  },
  {
    series: 'V100系列',
    model: 'V100',
    warranty: '10年',
    features: '加厚版，韧度更强',
  },
  {
    series: 'V1000系列',
    model: 'V1000',
    warranty: '10年',
    features: '厚度提升30%+，耐穿刺，需高级技师施工',
  },
  {
    series: 'V5系列',
    model: 'V5',
    warranty: '7年',
    features: '基础保护',
  },
  {
    series: 'V3系列',
    model: 'V3',
    warranty: '6年',
    features: '入门级，质价比高',
  },
];

export function PPFSection() {
  return (
    <section id="ppf" className="py-20 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">漆面保护膜</span> (PPF)
          </h2>
          <p className="text-gray-400 text-lg">
            隐形车衣，为您的爱车提供持久保护
          </p>
        </div>

        {/* 特点介绍 */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#B8942C]/10 border border-[#D4AF37]/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">防护升级</h3>
            <p className="text-gray-400">
              抵御石子、砂砾、树枝等物理划伤，保持漆面如新
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#B8942C]/10 to-[#E5C158]/10 border border-[#B8942C]/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#B8942C]/20 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-[#E5C158]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">自修复技术</h3>
            <p className="text-gray-400">
              轻微划痕遇热自动修复，让车身始终光洁如镜
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#E5C158]/10 to-[#D4AF37]/10 border border-[#E5C158]/20 rounded-2xl p-6">
            <div className="w-12 h-12 bg-[#E5C158]/20 rounded-xl flex items-center justify-center mb-4">
              <Timer className="w-6 h-6 text-[#E5C158]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">长效质保</h3>
            <p className="text-gray-400">
              最高12年质保，让您的投资获得长期回报
            </p>
          </div>
        </div>

        {/* 产品列表 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ppfProducts.map((product) => (
            <div
              key={product.model}
              className={`bg-black/70 border rounded-2xl p-6 hover:bg-black/80 transition-all ${
                product.recommended
                  ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20'
                  : 'border-[#D4AF37]/30'
              }`}
            >
              {product.recommended && (
                <div className="inline-flex items-center gap-1 bg-[#D4AF37]/20 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-medium mb-4 border border-[#D4AF37]/30">
                  <Sparkles className="w-3 h-3" />
                  旗舰推荐
                </div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#D4AF37] mb-1">
                  {product.model}
                </h3>
                <p className="text-gray-400 text-sm">{product.series}</p>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">质保期限</span>
                  <span className="text-[#D4AF37] font-semibold">
                    {product.warranty}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#D4AF37]/20">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {product.features}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-start gap-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 max-w-4xl mx-auto">
          <div className="text-[#D4AF37] mt-0.5">
            <Shield className="w-5 h-5" />
          </div>
          <div className="text-sm text-gray-300">
            <strong className="text-[#D4AF37]">施工提醒：</strong>
            漆面保护膜施工需要专业技师和无尘环境，V1000系列等高端产品需要高级认证技师施工。我们拥有V-KOOL官方认证施工资质，确保施工质量。
          </div>
        </div>
      </div>
    </section>
  );
}