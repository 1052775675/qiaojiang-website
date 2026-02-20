import { Phone } from 'lucide-react';

export function FloatingCTA() {
  return (
    <a
      href="tel:13358971515"
      className="fixed bottom-6 left-4 right-4 z-40 lg:hidden flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B8942C] text-black font-semibold py-4 px-6 rounded-2xl shadow-lg shadow-[#D4AF37]/30 active:scale-[0.98] transition-transform"
      style={{ bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px) + 0.5rem)' }}
    >
      <Phone className="w-5 h-5" />
      <span>立即预约 · 133-5897-1515</span>
    </a>
  );
}
