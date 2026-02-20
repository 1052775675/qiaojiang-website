import { Lightbulb, Car, DollarSign, Crown, Gem, Briefcase, TrendingUp } from 'lucide-react';

export function FilmGuideSection() {
  const guides = [
    {
      icon: Car,
      scenario: '日常通勤',
      priceRange: '10-20万家用车',
      typicalCars: '轩逸、卡罗拉、思域、哈弗H6、秦PLUS、埃安S',
      plan: {
        frontWindshield: 'VK70',
        sideRear: 'K15 / K35',
        combination: '全车VK70+K15/K35',
        budget: '¥5,200',
      },
      parameters: [
        '可见光透过率：前挡71% / 侧后15-35%',
        '太阳能阻隔率：前挡55% / 侧后48-52%',
        '紫外线阻隔率：99%+',
        '质保期：前挡5年 / 侧后10年',
      ],
      effects: [
        '车内温度降低8-10°C',
        '空调负荷减少，油耗降低15-20%',
        '前挡VK70红外线阻隔率94%，正午阳光下手臂无灼烧感',
      ],
      insight:
        '这是10-20万级通勤车主最理性的选择。VK70负责解决"晒脸"的核心痛点，K系列侧后永不褪色、隔热持久。每天多花5毛钱，换来3-5年通勤舒适，是威固全系里投入产出比最高的方案。',
    },
    {
      icon: Briefcase,
      scenario: '商务兼顾',
      priceRange: '20-40万合资/豪华入门',
      typicalCars: '凯美瑞、雅阁、帕萨特、Model 3、宝马3系、奥迪A4L',
      plan: {
        frontWindshield: 'VK70',
        sideRear: '前侧窗KC20 + 后侧窗/后档K15',
        combination: '"顶顶常"VK70+KC20+K15',
        budget: '¥6,600',
      },
      parameters: [
        '可见光透过率：前挡71% / 前侧窗20% / 后侧窗15%',
        '太阳能阻隔率：前挡55% / 前侧窗58% / 后侧窗52%',
        '紫外线阻隔率：99%+',
        '质保期：前挡5年 / 侧后10年',
      ],
      effects: [
        '前排体感温度比单贴K系列再降低3-5°C',
        '前侧窗KC20采用多层磁控溅射，红外线反射率远超染色膜',
        '夜间倒车视野清晰，无暗区困扰',
      ],
      insight:
        '20-40万级车主，前排玻璃面积大、晒感最明显。把预算往前排倾斜，前侧窗升级KC20，是"把钱花在刀刃上"的典型打法。商务接待时车内体面、清凉，客户坐进来第一句话往往是：你这车空调真冷。',
    },
    {
      icon: Crown,
      scenario: '豪华中坚',
      priceRange: '40-80万豪华品牌',
      typicalCars: '宝马5系、奔驰E级、奥迪A6L、理想L9、蔚来ES8',
      plan: {
        frontWindshield: 'VK70',
        sideRear: 'VK25（燃油）/ KC20（新能源）',
        combination: 'VK70 + VK25（燃油）/ VK70 + KC20（新能源）',
        budget: '燃油：¥7,900 / 新能源：¥7,200',
      },
      parameters: [
        '可见光透过率：前挡71% / 侧后20-25%',
        '太阳能阻隔率：前挡55% / 侧后58-62%',
        '紫外线阻隔率：99%+',
        '质保期：全车5-10年',
      ],
      effects: [
        '全车红外线阻隔率整体突破55%+',
        'VK25是威固经典旗舰，质感深邃不泛蓝',
        'KC20专为新能源优化，信号零阻隔',
      ],
      insight:
        '40-80万级车主，既要性能也要颜值。VK25的深邃质感与深色漆面、镀铬饰条绝配；新能源车主无信号焦虑首选KC20。这是威固窗膜的"旗舰门槛"，贴完客户会说：这才像这个价位的车。',
    },
    {
      icon: Gem,
      scenario: '顶级旗舰',
      priceRange: '80万以上旗舰座驾',
      typicalCars: '保时捷Panamera、奔驰S级、宝马X7、路虎揽胜、Model X Plaid',
      plan: {
        frontWindshield: 'VP70（燃油）/ KC73（新能源）',
        sideRear: 'VP28（燃油）/ KC20（新能源）',
        combination: 'VP70+VP28 或 KC73+KC20',
        budget: '燃油：¥12,200 / 新能源：¥6,900',
      },
      parameters: [
        '可见光透过率：前挡71% / 侧后20-28%',
        '太阳能阻隔率：前挡54-57% / 侧后58-62%',
        '紫外线阻隔率：99%+',
        '质保期：全车5-7年',
      ],
      effects: [
        'VP70透光71%、总隔热率54%，不改变原车通透感',
        'KC73是新能源顶级前挡，信号穿透力与隔热完美平衡',
        '原厂夹胶玻璃基础上红外线再砍一半',
      ],
      insight:
        '80万以上旗舰车主，我们要做的是"不扣分"。VP系列极致通透，贴完像没贴一样；KC73解决新能源信号焦虑。不提价格，只讲"这是最符合您这辆车的方案"。',
    },
  ];

  const frontWindshieldTips = {
    title: '前挡玻璃选膜必读',
    requirements: [
      {
        label: '国标要求',
        content: 'GB 7258-2017规定前挡可见光透过率≥70%',
        highlight: '否则年检不合格',
      },
      {
        label: '开原推荐',
        content: 'VK70（透光率71%）',
        highlight: '既合规又隔热',
      },
      {
        label: '误区警告',
        content: '不要选K35、X15、K15等低透光率膜用于前挡',
        highlight: '夜间视线差，年检不通过',
      },
    ],
  };

  const ppfGuide = {
    title: 'PPF漆面保护膜选装建议',
    scenarios: [
      {
        type: '经济型方案',
        coverage: '前机盖 + 前杠 + 大灯',
        price: '8000-12000元',
        benefit: '保护最易受损区域，性价比高',
      },
      {
        type: '标准型方案',
        coverage: '前机盖 + 前杠 + 大灯 + 叶子板 + A柱',
        price: '15000-20000元',
        benefit: '覆盖车头90%易损区域',
      },
      {
        type: '全车型方案',
        coverage: '全车（除车顶）',
        price: '30000-50000元',
        benefit: '全方位保护，保值率提升15-20%',
      },
    ],
    note: 'PPF施工周期3-5天，需预约专用车间',
  };

  return (
    <section className="py-32 bg-gradient-to-b from-black to-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full px-6 py-2.5 mb-6 section-badge">
            <Lightbulb className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-semibold">专业建议</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">开原车主</span>选膜指南
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            不同车型、预算、需求，应选择不同型号。以下是基于13年服务经验的专业建议
          </p>
        </div>

        {/* Film Selection Guide - New 4 Tier System */}
        <div className="space-y-8 mb-16">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-black via-[#0a0a0a] to-black border-2 border-[#D4AF37]/30 rounded-3xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-8 h-8 text-[#D4AF37]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {guide.scenario}
                      </h3>
                      <div className="text-[#D4AF37] font-semibold">
                        {guide.priceRange}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#D4AF37]/20 border border-[#D4AF37]/40 rounded-xl px-4 py-2 text-center">
                    <div className="text-xs text-gray-400 mb-1">参考预算</div>
                    <div className="text-[#D4AF37] font-bold text-lg">
                      {guide.plan.budget}
                    </div>
                  </div>
                </div>

                {/* Typical Cars */}
                <div className="mb-6 bg-black/40 border border-[#D4AF37]/20 rounded-xl p-4">
                  <div className="text-xs text-gray-400 mb-2">适用车型</div>
                  <div className="text-white text-sm">{guide.typicalCars}</div>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 mb-6">
                  {/* Plan Table */}
                  <div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-4 text-lg">推荐方案</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center pb-3 border-b border-[#D4AF37]/20">
                        <span className="text-gray-400 text-sm">前挡型号</span>
                        <span className="text-white font-semibold">
                          {guide.plan.frontWindshield}
                        </span>
                      </div>
                      <div className="flex justify-between items-start pb-3 border-b border-[#D4AF37]/20">
                        <span className="text-gray-400 text-sm">侧后型号</span>
                        <span className="text-white font-semibold text-right">
                          {guide.plan.sideRear}
                        </span>
                      </div>
                      <div className="flex justify-between items-start">
                        <span className="text-gray-400 text-sm">组合策略</span>
                        <span className="text-[#D4AF37] font-semibold text-right">
                          {guide.plan.combination}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Parameters */}
                  <div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6">
                    <h4 className="text-white font-bold mb-4 text-lg">核心参数</h4>
                    <ul className="space-y-2">
                      {guide.parameters.map((param, i) => (
                        <li
                          key={i}
                          className="text-gray-300 text-sm flex items-start gap-2"
                        >
                          <span className="text-[#D4AF37] mt-1">•</span>
                          <span>{param}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Effects */}
                <div className="bg-gradient-to-r from-green-500/10 to-transparent border-l-4 border-green-500 rounded-lg p-4 mb-4">
                  <div className="text-green-400 font-semibold mb-2 text-sm">
                    实测效果：
                  </div>
                  <ul className="space-y-1">
                    {guide.effects.map((effect, i) => (
                      <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Insight */}
                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-lg p-4">
                  <div className="text-gray-300 text-sm leading-relaxed italic">
                    💡 {guide.insight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Front Windshield Tips */}
        <div className="bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 border-2 border-red-500/30 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center">
              <Car className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              ⚠️ {frontWindshieldTips.title}
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {frontWindshieldTips.requirements.map((req, index) => (
              <div
                key={index}
                className="bg-black/60 border border-red-500/30 rounded-xl p-4"
              >
                <div className="text-red-400 font-semibold mb-2">
                  {req.label}
                </div>
                <div className="text-gray-300 text-sm mb-2">{req.content}</div>
                <div className="text-red-500 text-xs font-bold">
                  ⚡ {req.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PPF Guide */}
        <div className="bg-gradient-to-br from-[#D4AF37]/5 to-transparent border-2 border-[#D4AF37]/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <Shield className="w-8 h-8 text-[#D4AF37]" />
            {ppfGuide.title}
          </h3>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {ppfGuide.scenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-5 hover:border-[#D4AF37] transition-all"
              >
                <div className="text-[#D4AF37] font-bold mb-3">
                  {scenario.type}
                </div>
                <div className="text-white text-sm mb-3">{scenario.coverage}</div>
                <div className="text-[#D4AF37] font-bold mb-3">
                  {scenario.price}
                </div>
                <div className="text-gray-400 text-xs">{scenario.benefit}</div>
              </div>
            ))}
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4">
            <div className="text-[#D4AF37] text-sm font-semibold">
              📌 注意事项：{ppfGuide.note}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}