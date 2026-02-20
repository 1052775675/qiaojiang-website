import { Building2, Award, Users } from 'lucide-react';

const storeFrontExterior = "/pics/6.jpg";
const productDisplayWall = "/pics/7.jpg";
const customerReceptionArea = "/pics/8.jpg";
const receptionDeskArea = "/pics/9.jpg";
const antiCounterfeitDisplay = "/pics/10.jpg";
const qualityAssuranceDisplay = "/pics/11.jpg";

export function StoreEnvironmentSection() {
  return (
    <section className="py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full px-6 py-2.5 mb-6 section-badge">
            <Building2 className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-semibold tracking-wide">门店环境</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            专业施工场地 · <span className="text-[#D4AF37]">V-KOOL官方形象店</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            辽宁省铁岭市开原市溪桂路22号-5门市 · 独立施工车间 · 专业接待区 · 全系产品展示
          </p>
        </div>

        {/* Environment Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Store Exterior */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={storeFrontExterior}
                alt="巧匠美车工作室门店外景 - V-KOOL官方授权形象店 - 辽宁省铁岭市开原市溪桂路22号-5门市"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">门店外景</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                V-KOOL官方授权形象店，独立门头标识，专业施工车间，提供一站式汽车贴膜服务
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>独立施工车间 · 标准化操作流程</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Display Wall */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={productDisplayWall}
                alt="V-KOOL产品展示区 - 全系窗膜PPF样品展示 - YOU DESERVE THE BEST因你不凡"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">产品展示区</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                V-KOOL全系产品实物展示，15种型号窗膜样品，透光率、隔热率现场对比体验
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>实物样品展示 · 参数现场对比</span>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Reception Area */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={customerReceptionArea}
                alt="客户接待休息区 - 舒适等待环境 - PPF漆面保护膜样品展示 - V-KOOL专业服务"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">客户接待区</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                舒适的客户休息区，PPF漆面保护膜样品展示柜，提供专业选膜咨询服务
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>舒适环境 · 专业咨询服务</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reception Desk & Award Wall */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={receptionDeskArea}
                alt="前台接待区 - V-KOOL官方授权证书墙 - 兰博基尼高端形象展示 - 专业服务台"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">前台接待区</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                专业前台服务区，墙面展示V-KOOL官方授权证书，高端品牌形象展示大屏
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>官方证书展示 · 高端品牌形象</span>
                </div>
              </div>
            </div>
          </div>

          {/* Anti-Counterfeit Education Display */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={antiCounterfeitDisplay}
                alt="防伪教育展示区 - V-KOOL皮肤之爱宠展示 - 假膜劣质膜警示 - 产品墙展示"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">防伪教育区</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                假膜劣质膜警示展示，V-KOOL正品防护知识科普，帮助客户识别正品贴膜
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>防伪科普 · 正品识别教育</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quality Assurance & Warranty Display */}
          <div className="group relative overflow-hidden rounded-2xl card-premium transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={qualityAssuranceDisplay}
                alt="无质保请维权展示区 - 膜回收桶展示 - V-KOOL质量保证承诺 - 消费者权益保护"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white">品质保障区</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                "无质保请维权"承诺展示，劣质膜回收桶实物展示，保障消费者权益
              </p>
              <div className="mt-4 pt-4 border-t border-[#D4AF37]/10">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37]">
                  <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
                  <span>质保承诺 · 消费者权益保护</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Store Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">300m²</div>
            <div className="text-sm text-gray-400">营业面积</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">5S</div>
            <div className="text-sm text-gray-400">标准化车间</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">15+</div>
            <div className="text-sm text-gray-400">产品型号展示</div>
          </div>
          <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-[#D4AF37]/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-[#D4AF37] mb-2">13年</div>
            <div className="text-sm text-gray-400">专业服务经验</div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">欢迎到店参观体验，现场对比产品效果</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:13358971515"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8942C] hover:from-[#E5C158] hover:to-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              <span>📞</span>
              <span>预约到店：13358971515</span>
            </a>
            <div className="text-sm text-gray-500">
              营业时间：08:00-18:00（全年无休）
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}