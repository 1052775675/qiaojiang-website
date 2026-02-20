import { useEffect, useState } from 'react';
import { getSupabase, FAQ } from '../../lib/supabase';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Loader2 } from 'lucide-react';

export function FAQSection() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadFAQs();
  }, []);

  const loadFAQs = async () => {
    try {
      const supabase = getSupabase();
      if (!supabase) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setFaqs(data || []);
    } catch (error) {
      console.error('Error loading FAQs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section id="faq" className="py-20 bg-black scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <div className="text-white">加载中...</div>
          </div>
        </div>
      </section>
    );
  }

  if (faqs.length === 0) {
    return (
      <section id="faq" className="py-20 bg-black scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
              <span className="text-[#D4AF37]">常见</span>问题
            </h2>
          </div>
          <div className="text-center text-gray-400">暂无常见问题</div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-black scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-4 tracking-tight">
            <span className="text-[#D4AF37]">常见</span>问题
          </h2>
          <p className="text-gray-400">为您解答贴膜相关疑问</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="card-premium rounded-xl px-6 data-[state=open]:border-[#D4AF37]/40 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] transition-colors py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-400 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}