import { AlertTriangle, Thermometer, Sun, Shield, Eye, Award } from 'lucide-react';

export function ProblemsSection() {
  const problems = [
    {
      icon: Thermometer,
      title: '夏季车内高温难忍',
      data: '开原市夏季最高温35°C+，车内可达50°C以上',
      consequences: [
        '仪表台老化开裂，使用寿命缩短60%',
        '方向盘烫手，需等待10-15分钟才能握持',
        '空调全负荷运转，油耗增加25-30%',
      ],
      solution: 'V-KOOL VK70窗膜',
      specs: [
        '红外线阻隔率：98%（行业平均60-70%）',
        '隔热率：67%（透光率70%情况下）',
        '紫外线阻隔率：99%',
      ],
      result: '实测数据：车内温度降低8-10°C，空调能耗降低35%，油耗节省约0.8L/百公里',
    },
    {
      icon: Sun,
      title: '冬季紫外线依然伤车',
      data: '开原市冬季-20°C低温，但低角度紫外线穿透力更强',
      consequences: [
        '真皮座椅干裂、褪色，3年后需更换（成本8000-15000元）',
        '中控台褪色、老化，影响车辆保值率',
        '驾驶者长期暴露，增加皮肤癌风险',
      ],
      solution: 'V-KOOL全系窗膜',
      specs: [
        'UV阻隔率：99%（等同SPF 1000+防晒霜）',
        '全波段防护：UVA & UVB双重拦截',
        '膜层稳定：-40°C至80°C极端温差不褪色',
      ],
      result: '对比测试：贴V-KOOL窗膜车辆，5年后内饰老化程度降低75%，二手车估值提升8%',
    },
    {
      icon: Shield,
      title: '道路砂石频繁伤漆',
      data: '东北地区冬季道路撒盐、砂石，高速行驶溅射频繁',
      consequences: [
        '车头、引擎盖、后视镜密集石击点',
        '车漆破损后锈蚀加速，修复成本5000-20000元',
        '保险杠、车门边缘易崩漆',
      ],
      solution: 'V-KOOL PPF漆面保护膜',
      specs: [
        '厚度：7.5mil（190微米），抗冲击力是普通膜3倍',
        '自修复涂层：60°C以下划痕24小时自动消失',
        '耐黄变：10年质保，不发黄、不龟裂',
      ],
      result: '客户反馈：全车贴PPF后，2年内车漆零石击，二手车估值溢价12-15%',
    },
    {
      icon: Eye,
      title: '劣质膜影响行车安全',
      data: '市场上70%的"V-KOOL"为假货，透光率不达标',
      consequences: [
        '前挡透光率<70%，年检不通过（补办成本500-1000元）',
        '夜间/隧道视线模糊，增加30%追尾风险',
        '劣质膜褪色、起泡，1-2年后必须重贴',
      ],
      solution: 'V-KOOL官方授权正品膜',
      specs: [
        '前挡透光率：VK70=70%，VK40=40%（符合GB 7258标准）',
        '可见光透过率符合国标，年检通过率100%',
        '授权编号VKWF0286，官网可查',
      ],
      result: '承诺：13年累计服务10000+台车，年检通过率100%，假一赔十',
    },
    {
      icon: AlertTriangle,
      title: '施工环境差导致返工',
      data: '普通门店露天或简易车间施工，灰尘、纤维混入膜内',
      consequences: [
        '气泡、沙粒、水痕，影响美观和隔热效果',
        '返工拆膜损伤车漆，得不偿失',
        '非官方授权门店拒绝质保，维权困难',
      ],
      solution: 'V-KOOL认证施工环境',
      specs: [
        'ISO 5级洁净车间（医疗手术室同等级）',
        'Master of Master顶级技师认证',
        '3M/SUMA授权双认证门店',
      ],
      result: '数据说话：返工率<1%（行业平均15-20%），客户满意度99%',
    },
  ];

  return (
    <section id="problems" className="py-32 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full px-6 py-2.5 mb-6 section-badge">
            <AlertTriangle className="w-5 h-5 text-[#D4AF37]/90" />
            <span className="text-sm text-[#D4AF37] font-semibold tracking-wide">车主痛点</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            开原车主<span className="text-[#D4AF37]">5大贴膜痛点</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            基于13年服务经验，我们总结了开原市车主最关心的问题，并提供数据化解决方案
          </p>
        </div>

        {/* Problems Grid */}
        <div className="space-y-12">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="card-premium rounded-2xl p-8 transition-all duration-500"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Left: Problem Definition */}
                  <div>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-[#D4AF37]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          ⚠️ 痛点{index + 1}：{problem.title}
                        </h3>
                        <p className="text-[#D4AF37] font-semibold">
                          📊 {problem.data}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#D4AF37]/70 rounded-full"></span>
                        后果分析
                      </h4>
                      <ul className="space-y-2">
                        {problem.consequences.map((item, i) => (
                          <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-[#D4AF37]/80 mt-1">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right: Solution & Evidence */}
                  <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-[#D4AF37]" />
                      <h4 className="text-[#D4AF37] font-bold text-lg">
                        V-KOOL解决方案
                      </h4>
                    </div>

                    <div className="mb-4">
                      <p className="text-white font-semibold mb-3">
                        ✅ {problem.solution}
                      </p>
                      <ul className="space-y-2">
                        {problem.specs.map((spec, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-[#D4AF37] mt-1">•</span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-black/40 border border-[#D4AF37]/30 rounded-lg p-4 mt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold text-sm">实测效果</span>
                      </div>
                      <p className="text-white text-sm">
                        {problem.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="card-premium rounded-2xl p-8 inline-block">
            <h3 className="font-serif text-2xl font-semibold text-white mb-4 tracking-tight">
              以上问题，<span className="text-[#D4AF37]">V-KOOL一站式解决</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="text-gray-300">
                ✅ 官方授权：编号VKWF0286
              </div>
              <div className="text-gray-300">
                ✅ 13年经验：服务10000+台车辆
              </div>
              <div className="text-gray-300">
                ✅ 返工率：&lt;1%
              </div>
              <div className="text-gray-300">
                ✅ 年检通过率：100%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
