import { Microscope, Scissors, ClipboardCheck, CheckCircle, Shield } from 'lucide-react';

const windowFilmProcess = "/pics/4.jpg";
const ppfProcess = "/pics/5.jpg";

export function StandardsSection() {
  const standards = [
    {
      icon: Microscope,
      title: '5S无尘车间',
      description: '医疗级别洁净度标准，确保贴膜过程零尘埃污染，保证膜面完美贴合',
      details: ['恒温恒湿环境', '双重过滤系统', 'HEPA空气净化'],
    },
    {
      icon: Scissors,
      title: '数码精准裁膜',
      description: '采用电脑数控裁膜系统，误差控制在±0.3mm以内，完美贴合车窗曲面',
      details: ['3D建模扫描', '激光精准切割', '原厂数据库'],
    },
    {
      icon: ClipboardCheck,
      title: '28道检验标准',
      description: '从材料验收到施工完成，每个环节严格把控，确保卓越品质',
      details: ['材料真伪验证', '施工过程监控', '完工质量检测'],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">专业</span>施工标准
          </h2>
          <p className="text-gray-400 text-lg">
            严苛的工艺流程，只为呈现完美效果
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {standards.map((standard, index) => {
            const Icon = standard.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-black/70 to-[#0a0a0a]/70 border border-[#D4AF37]/30 rounded-2xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8942C]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">{standard.title}</h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">{standard.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {standard.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Decorative number */}
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5 group-hover:text-[#D4AF37]/10 transition-colors">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        {/* 窗膜施工流程 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              窗膜20步<span className="text-[#D4AF37]">精工</span>工艺
            </h3>
            <p className="text-gray-400">
              每一步都经过精心设计，确保车窗膜完美贴合
            </p>
          </div>

          {/* 窗膜施工流程大图 */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-2xl shadow-[#D4AF37]/10">
            <img
              src={windowFilmProcess}
              alt="V-KOOL 窗膜20步标准施工流程"
              className="w-full h-auto"
            />
            
            {/* 渐变遮罩效果 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 漆面保护膜施工流程 */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              PPF<span className="text-[#D4AF37]">专业</span>施工流程
            </h3>
            <p className="text-gray-400">
              漆面保护膜施工，为爱车提供全方位防护
            </p>
          </div>

          {/* 漆面保护膜施工流程大图 */}
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-2xl shadow-[#D4AF37]/10">
            <img
              src={ppfProcess}
              alt="V-KOOL 漆面保护膜专业施工流程"
              className="w-full h-auto"
            />
            
            {/* 渐变遮罩效果 */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* 品质保证说明 */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">20+</div>
              <div className="text-gray-400 text-sm">标准施工步骤</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
              <div className="text-gray-400 text-sm">质量检验合格</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">10年</div>
              <div className="text-gray-400 text-sm">品质质保承诺</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}