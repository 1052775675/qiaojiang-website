import { Shield, Menu, X, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const SECTION_IDS = ['authorization', 'problems', 'specs', 'ppf', 'team', 'cases', 'faq', 'contact'];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'top', label: '首页', action: scrollToTop },
    { id: 'authorization', label: '官方授权' },
    { id: 'problems', label: '车主痛点' },
    { id: 'specs', label: '窗膜参数' },
    { id: 'ppf', label: 'PPF漆面膜' },
    { id: 'team', label: '团队介绍' },
    { id: 'cases', label: '施工案例' },
    { id: 'faq', label: '常见问题' },
    { id: 'contact', label: '联系我们' },
  ];

  useEffect(() => {
    const sections = SECTION_IDS;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    const onScroll = () => {
      if (window.scrollY < 100) setActiveSection('top');
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-[#D4AF37]/10 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 ${scrolled ? 'bg-black/70' : 'bg-black/40'}`} role="navigation" aria-label="主导航">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-xl flex items-center justify-center shadow-[0_2px_12px_-2px_rgba(212,175,55,0.4)]">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#D4AF37] font-bold text-lg">开原市巧匠美车工作室</div>
              <div className="text-xs text-gray-500 tracking-wide">V-KOOL官方授权 · VKWF0286</div>
            </div>
            <div className="block sm:hidden">
              <div className="text-[#D4AF37] font-bold">巧匠美车</div>
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const action = item.action ?? (() => scrollToSection(item.id));
              return (
                <motion.button
                  key={item.id}
                  onClick={action}
                  className={`text-sm font-medium relative group transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded px-1 py-2 ${
                    isActive ? 'text-[#D4AF37]' : 'text-gray-300 hover:text-[#D4AF37]'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </motion.button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <a href="tel:13358971515" className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37]">
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-[#D4AF37] transition-colors p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? '关闭菜单' : '打开菜单'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-nav"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#D4AF37]/20"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                const action = item.action ?? (() => scrollToSection(item.id));
                return (
                  <button
                    key={item.id}
                    onClick={action}
                    className={`text-left py-3 px-4 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]/60 focus-visible:ring-inset ${
                      isActive ? 'text-[#D4AF37] bg-[#D4AF37]/10' : 'text-gray-300 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}