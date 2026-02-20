import { motion, useScroll } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37] origin-left z-50 shadow-lg shadow-[#D4AF37]/50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
