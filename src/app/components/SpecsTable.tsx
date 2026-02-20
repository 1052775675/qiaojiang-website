import { Check } from 'lucide-react';

const filmComparisonImage = "/pics/3.jpg";

interface FilmSpec {
  series: string;
  model: string;
  vlt: string; // 可见光透过率
  solarRejection: string; // 太阳能阻隔率（隔热率）
  uvBlock: string; // 紫外线阻隔率
  warranty: string;
  features?: string;
  recommended?: boolean;
}

const filmSpecs: FilmSpec[] = [
  // VK经典系列
  {
    series: 'VK经典',
    model: 'VK70',
    vlt: '71%',
    solarRejection: '55%',
    uvBlock: '99%',
    warranty: '10年',
    features: '高隔热、高清晰',
    recommended: true,
  },
  {
    series: 'VK经典',
    model: 'VK70 72"',
    vlt: '71%',
    solarRejection: '55%',
    uvBlock: '99%',
    warranty: '10年',
  },
  {
    series: 'VK经典',
    model: 'VK25',
    vlt: '28%',
    solarRejection: '68%',
    uvBlock: '99%',
    warranty: '5年',
  },
  // X系列
  {
    series: 'X系列',
    model: 'X15',
    vlt: '16%',
    solarRejection: '60%',
    uvBlock: '99%',
    warranty: '5年',
    features: '磁控溅射工艺',
  },
  // K系列
  {
    series: 'K系列',
    model: 'K15',
    vlt: '18%',
    solarRejection: '60%',
    uvBlock: '99%',
    warranty: '5年',
  },
  {
    series: 'K系列',
    model: 'K35',
    vlt: '35%',
    solarRejection: '51%',
    uvBlock: '99%',
    warranty: '5年',
    features: '隐私需求',
  },
  // VP防护系列
  {
    series: 'VP防护',
    model: 'VP70 (15m)',
    vlt: '71%',
    solarRejection: '55%',
    uvBlock: '99%',
    warranty: '5年',
    features: '隔热+防护双重保护',
  },
  {
    series: 'VP防护',
    model: 'VP70 (30m)',
    vlt: '71%',
    solarRejection: '55%',
    uvBlock: '99%',
    warranty: '5年',
  },
  {
    series: 'VP防护',
    model: 'VP70 (36")',
    vlt: '71%',
    solarRejection: '55%',
    uvBlock: '99%',
    warranty: '5年',
  },
  {
    series: 'VP防护',
    model: 'VP40',
    vlt: '46%',
    solarRejection: '62%',
    uvBlock: '99%',
    warranty: '5年',
  },
  {
    series: 'VP防护',
    model: 'VP28',
    vlt: '29%',
    solarRejection: '56%',
    uvBlock: '99%',
    warranty: '5年',
  },
  // KC系列
  {
    series: 'KC系列',
    model: 'KC73',
    vlt: '73%',
    solarRejection: '47%',
    uvBlock: '99%',
    warranty: '5年',
    features: '多层纳米陶瓷技术',
  },
  {
    series: 'KC系列',
    model: 'KC35',
    vlt: '34%',
    solarRejection: '60%',
    uvBlock: '99%',
    warranty: '5年',
  },
  {
    series: 'KC系列',
    model: 'KC20',
    vlt: '19%',
    solarRejection: '64%',
    uvBlock: '99%',
    warranty: '5年',
  },
  // VE系列
  {
    series: 'VE系列',
    model: 'VE72',
    vlt: '72%',
    solarRejection: '43%',
    uvBlock: '99%',
    warranty: '5年',
    features: '高性价比',
  },
  {
    series: 'VE系列',
    model: 'VE20',
    vlt: '20%',
    solarRejection: '51%',
    uvBlock: '99%',
    warranty: '5年',
  },
];

export function SpecsTable() {
  return (
    <section id="specs" className="py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#D4AF37]">窗膜</span>技术参数对比
          </h2>
          <p className="text-gray-400 text-lg">
            专业数据驱动，为您的爱车选择最佳方案
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-black/60 border border-[#D4AF37]/30 rounded-2xl overflow-hidden">
            <thead>
              <tr className="bg-gradient-to-r from-[#D4AF37]/20 to-[#B8942C]/20 border-b border-[#D4AF37]/30">
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#D4AF37]">
                  膜系列
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-[#D4AF37]">
                  型号
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#D4AF37]">
                  可见光透过率
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#D4AF37]">
                  太阳能阻隔率
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#D4AF37]">
                  紫外线阻隔率
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-[#D4AF37]">
                  质保期限
                </th>
              </tr>
            </thead>
            <tbody>
              {filmSpecs.map((spec, index) => (
                <tr
                  key={spec.model}
                  className={`${
                    index % 2 === 0 ? 'bg-black/30' : 'bg-black/50'
                  } ${
                    spec.recommended ? 'border-l-4 border-[#D4AF37]' : ''
                  } hover:bg-[#D4AF37]/5 transition-colors`}
                >
                  <td className="px-6 py-4 text-white font-medium">
                    {spec.series}
                    {spec.recommended && (
                      <span className="ml-2 inline-flex items-center gap-1 text-xs bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-1 rounded-full border border-[#D4AF37]/30">
                        <Check className="w-3 h-3" />
                        推荐
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-gray-300 font-mono">{spec.model}</td>
                  <td className="px-6 py-4 text-center text-gray-300">{spec.vlt}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-[#E5C158] font-semibold">{spec.solarRejection}</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-[#B8942C] font-semibold">{spec.uvBlock}</span>
                  </td>
                  <td className="px-6 py-4 text-center text-gray-300">{spec.warranty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 flex items-start gap-3 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-xl p-4 max-w-4xl mx-auto">
          <div className="text-[#D4AF37] mt-0.5">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-sm text-gray-300">
            <strong className="text-[#D4AF37]">专业提示：</strong>
            所有数据均为实验室测试结果。太阳能阻隔率直接影响隔热效果，紫外线阻隔率关系到内饰保护和皮肤健康。
          </div>
        </div>

        {/* Film Comparison Visualization */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-3">
              透光率<span className="text-[#D4AF37]">视觉对比</span>
            </h3>
            <p className="text-gray-400">
              同一场景不同透光率效果对比，直观感受V-KOOL窗膜的隔热与透明度平衡
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-2xl shadow-[#D4AF37]/20">
            <img
              src={filmComparisonImage}
              alt="V-KOOL窗膜透光率对比 - X15/K15/KC20/VK25/VP28/KC35/K35/VP40/VK70/VP70/KC73型号视觉效果对比"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Comparison Tips */}
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/20 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🌓</div>
              <div className="text-white font-semibold mb-1 text-sm">低透光率 (15-25%)</div>
              <div className="text-gray-400 text-xs">隐私性强，隔热效果好<br />适合侧后挡玻璃</div>
            </div>
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/20 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🌗</div>
              <div className="text-white font-semibold mb-1 text-sm">中透光率 (30-50%)</div>
              <div className="text-gray-400 text-xs">平衡隐私与视野<br />适合全车通用</div>
            </div>
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/20 rounded-xl p-5 text-center">
              <div className="text-2xl mb-2">🌕</div>
              <div className="text-white font-semibold mb-1 text-sm">高透光率 (70%+)</div>
              <div className="text-gray-400 text-xs">清晰视野，符合法规<br />适合前挡风玻璃</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}