import { Shield, Thermometer, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSpecs = () => {
    document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' });
  };

  // High-end luxury car background image
  const heroBackgroundUrl = 'https://images.unsplash.com/photo-1720929680517-9c1ce16a9ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBkZXRhaWwlMjBibGFjayUyMGdvbGQlMjByZWZsZWN0aW9ufGVufDF8fHx8MTc3MDk2OTU5N3ww&ixlib=rb-4.1.0&q=80&w=1080';

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* Multi-layer background design */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a1a1a] to-black"></div>
        
        {/* Luxury car image overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url(${heroBackgroundUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></div>
        
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60"></div>
        
        {/* Premium gold accent pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 20px,
              rgba(212, 175, 55, 0.15) 20px,
              rgba(212, 175, 55, 0.15) 22px
            )`
          }}
        ></div>
        
        {/* Radial spotlight effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
          }}
        ></div>
        
        {/* Top gold accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full px-4 py-2 mb-6"
        >
          <Shield className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm text-[#D4AF37]">V-KOOL官方授权施工店 · 授权编号：VKWF0286</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6"
        >
          <span className="text-[#D4AF37]">开原市巧匠美车工作室</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E5C158] mt-2">
            V-KOOL威固贴膜 · 专业汽车美容
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-300 mb-4"
        >
          汽车装饰 · 美容养护 · 隔热贴膜 · 漆面保护
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          <span className="text-[#D4AF37] font-semibold">13年专业服务</span> · 10000+台车辆施工经验 · 返工率&lt;1% · 年检通过率100%
        </motion.p>

        {/* Key metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10"
        >
          <div className="bg-black/70 border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
            <Thermometer className="w-10 h-10 text-[#D4AF37] mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">95%+</div>
            <div className="text-sm text-gray-300">红外线阻隔率</div>
          </div>
          <div className="bg-black/70 border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
            <Sun className="w-10 h-10 text-[#E5C158] mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">70%+</div>
            <div className="text-sm text-gray-300">可见光透过率</div>
          </div>
          <div className="bg-black/70 border border-[#D4AF37]/30 rounded-2xl p-6 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300">
            <Shield className="w-10 h-10 text-[#B8942C] mx-auto mb-3" />
            <div className="text-3xl font-bold text-[#D4AF37] mb-1">12年</div>
            <div className="text-sm text-gray-300">质量保证</div>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8942C] hover:from-[#E5C158] hover:to-[#D4AF37] text-black px-8 font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 w-full"
              onClick={scrollToContact}
            >
              获取专业诊断
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 w-full"
              onClick={scrollToSpecs}
            >
              查看技术参数
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}