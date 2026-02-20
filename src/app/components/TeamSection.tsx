import { Users, Award, TrendingUp, Heart, Trophy, Medal } from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatedNumber } from './AnimatedNumber';

const teamPhoto = "/pics/12.jpg";
const awardsPhoto = "/pics/13.jpg";
const certificateWallPhoto = "/pics/14.jpg";
const certificatesPhoto = "/pics/15.jpg";

export function TeamSection() {
  const achievements = [
    {
      icon: Users,
      value: 8,
      suffix: '+',
      label: '专业技师',
      description: 'V-KOOL认证施工团队',
    },
    {
      icon: Award,
      value: 13,
      suffix: '年',
      label: '服务经验',
      description: '服务开原车主超过13年',
    },
    {
      icon: TrendingUp,
      value: 10000,
      suffix: '+',
      label: '服务车辆',
      description: '累计服务超过10000台车',
    },
    {
      icon: Heart,
      value: 99,
      suffix: '%',
      label: '客户满意度',
      description: '返工率<1%，年检通过率100%',
    },
  ];

  return (
    <section id="team" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-full px-6 py-2.5 mb-6 section-badge">
            <Users className="w-5 h-5 text-[#D4AF37]" />
            <span className="text-sm text-[#D4AF37] font-semibold tracking-wide">专业团队</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">巧匠美车</span>专业团队
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            经验丰富的V-KOOL认证技师团队，为每一位客户提供专业、细致的服务
          </p>
        </motion.div>

        {/* Team Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-gradient-to-br from-black to-[#0a0a0a] shadow-2xl shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-300">
            <img
              src={teamPhoto}
              alt="巧匠美车工作室专业团队 - V-KOOL认证技师"
              className="w-full h-auto"
              loading="lazy"
            />
            
            {/* Photo overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            
            {/* V-KOOL Badge on photo */}
            <div className="absolute bottom-6 left-6 bg-black/90 border border-[#D4AF37]/50 rounded-xl px-6 py-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-black" />
                </div>
                <div>
                  <div className="text-[#D4AF37] font-bold text-sm">V-KOOL官方授权</div>
                  <div className="text-gray-300 text-xs">认证施工团队</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Awards and Certificates Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-6 py-2 mb-4">
              <Trophy className="w-5 h-5 text-[#D4AF37]" />
              <span className="text-sm text-[#D4AF37] font-semibold">荣誉资质</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-3">
              <span className="text-[#D4AF37]">专业认证</span>与荣誉
            </h3>
            <p className="text-gray-400">
              获得V-KOOL官方认可，拥有行业最高级别Master of Master技师资质
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Awards Photo + Certificate Wall Photo */}
            <div className="space-y-8">
              {/* Awards Photo */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-xl shadow-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
                  <img
                    src={awardsPhoto}
                    alt="V-KOOL荣誉奖项 - 2023年度潜力之星"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Awards Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Trophy className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
                        <div>
                          <div className="text-[#D4AF37] font-bold">V-KOOL荣誉奖项</div>
                          <div className="text-gray-300 text-sm">2023年度潜力之星 · 五星级门店</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certificate Wall Photo - Below Awards */}
              <div className="group">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-xl shadow-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
                  <img
                    src={certificateWallPhoto}
                    alt="V-KOOL官方授权证书墙 - 办公室荣誉展示"
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  
                  {/* Photo Label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl px-5 py-3">
                      <div className="flex items-center gap-3">
                        <Award className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
                        <div className="flex-1">
                          <div className="text-[#D4AF37] font-bold">V-KOOL官方授权证书墙</div>
                          <div className="text-gray-300 text-sm">授权经销商证书 · Master of Master技师认证 · 品牌荣誉奖项</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Master of Master Certificates Photo */}
            <div className="group">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/30 bg-black shadow-xl shadow-[#D4AF37]/10 hover:border-[#D4AF37]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 h-full">
                <img
                  src={certificatesPhoto}
                  alt="V-KOOL Master of Master技师认证证书"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Certificates Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/80 backdrop-blur-md border border-[#D4AF37]/50 rounded-xl px-5 py-3">
                    <div className="flex items-center gap-3">
                      <Medal className="w-8 h-8 text-[#D4AF37] flex-shrink-0" />
                      <div>
                        <div className="text-[#D4AF37] font-bold">Master of Master</div>
                        <div className="text-gray-300 text-sm">行业最高级别技师认证</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certification Highlights */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/30 rounded-xl p-6 text-center hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-white font-semibold mb-2">2023年度潜力之星</div>
              <div className="text-gray-400 text-sm">V-KOOL官方授予</div>
            </div>
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/30 rounded-xl p-6 text-center hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-white font-semibold mb-2">五星级门店认证</div>
              <div className="text-gray-400 text-sm">V-KOOL官方认证</div>
            </div>
            <div className="bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/30 rounded-xl p-6 text-center hover:border-[#D4AF37]/50 transition-all">
              <div className="text-4xl mb-3">🎖️</div>
              <div className="text-white font-semibold mb-2">Master of Master</div>
              <div className="text-gray-400 text-sm">3位技师获得最高认证</div>
            </div>
          </div>

          {/* Master of Master Detailed Description */}
          <div className="mt-12 bg-gradient-to-br from-[#1a1a1a] via-black to-[#0a0a0a] border-2 border-[#D4AF37]/40 rounded-2xl p-8 shadow-2xl shadow-[#D4AF37]/10">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Left: MoM Badge */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-[#D4AF37] via-[#B8942C] to-[#8B7355] rounded-full flex items-center justify-center shadow-2xl shadow-[#D4AF37]/30 relative">
                  <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#D4AF37] font-bold text-xs mb-1">MASTER</div>
                      <div className="text-white font-bold text-sm">OF</div>
                      <div className="text-[#D4AF37] font-bold text-xs mt-1">MASTER</div>
                    </div>
                  </div>
                  {/* Decorative corner marks */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]"></div>
                </div>
              </div>

              {/* Right: Description */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <Medal className="w-8 h-8 text-[#D4AF37]" />
                  <h3 className="text-2xl font-bold text-white">
                    Master <span className="text-[#D4AF37]">OF</span> Master
                  </h3>
                </div>
                
                <div className="space-y-3 mb-6">
                  <p className="text-gray-300 leading-relaxed">
                    <span className="text-[#D4AF37] font-semibold">威固顶级贴膜师标志</span>，承载技术标杆身份。总在承前启后之时，为您巧夺天工。
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div className="flex items-start gap-3 bg-black/40 rounded-lg p-4 border border-[#D4AF37]/20">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">PPF专业施工</div>
                        <div className="text-gray-400 text-xs">4年以上经验</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 bg-black/40 rounded-lg p-4 border border-[#D4AF37]/20">
                      <div className="w-2 h-2 rounded-full bg-[#D4AF37] mt-2 flex-shrink-0"></div>
                      <div>
                        <div className="text-white font-semibold text-sm mb-1">精确操作时长</div>
                        <div className="text-gray-400 text-xs">超2800小时</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-gray-400">
                    本店拥有 <span className="text-[#D4AF37] font-bold">3位</span> Master of Master 认证技师
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-black/60 to-[#0a0a0a]/60 border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/20 text-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-[#D4AF37]/20 to-[#B8942C]/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-[#D4AF37]" />
                </div>

                {/* Number */}
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">
                  <AnimatedNumber end={item.value} suffix={item.suffix} duration={2.5} />
                </div>

                {/* Label */}
                <div className="text-white font-semibold mb-2">
                  {item.label}
                </div>

                {/* Description */}
                <div className="text-gray-500 text-sm">
                  {item.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Values */}
        <div className="bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              我们的<span className="text-[#D4AF37]">服务理念</span>
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-5xl mb-3">🎯</div>
              <div className="text-white font-semibold mb-2">专业专注</div>
              <div className="text-gray-400 text-sm">
                专注汽车贴膜领域<br />持续提升技术水平
              </div>
            </div>
            <div>
              <div className="text-5xl mb-3">💎</div>
              <div className="text-white font-semibold mb-2">品质至上</div>
              <div className="text-gray-400 text-sm">
                只使用V-KOOL原厂材料<br />严格把控每一道工序
              </div>
            </div>
            <div>
              <div className="text-5xl mb-3">🤝</div>
              <div className="text-white font-semibold mb-2">客户第一</div>
              <div className="text-gray-400 text-sm">
                用心服务每一位客户<br />建立长期信任关系
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}