import { Shield, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 border-b border-[#D4AF37]/20 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={scrollToTop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8942C] rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-black" />
            </div>
            <div className="hidden sm:block">
              <div className="text-[#D4AF37] font-bold text-lg">开原市巧匠美车工作室</div>
              <div className="text-xs text-gray-400">V-KOOL官方授权 · VKWF0286</div>
            </div>
            <div className="block sm:hidden">
              <div className="text-[#D4AF37] font-bold">巧匠美车</div>
            </div>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={item.action || (() => scrollToSection(item.id))}
                className="text-gray-300 hover:text-[#D4AF37] transition-colors text-sm font-medium relative group"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-300 hover:text-[#D4AF37] transition-colors p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-[#D4AF37]/20"
        >
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={item.action || (() => scrollToSection(item.id))}
                  className="text-gray-300 hover:text-[#D4AF37] transition-colors text-left py-2 px-4 rounded-lg hover:bg-[#D4AF37]/10"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}