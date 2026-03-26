import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-red-600 to-rose-500 p-8 md:p-12"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 blur-[60px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex w-16 h-16 bg-white/20 rounded-full items-center justify-center animate-pulse">
                <Phone className="text-white" size={32} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">জরুরী রক্তের প্রয়োজন?</h3>
                <p className="text-white/80 font-medium">আমাদের ব্লাড ডোনার নেটওয়ার্ক সবসময় আপনার পাশে আছে।</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 bg-white text-red-600 font-bold rounded-2xl shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                এখনই কল করুন
                <Phone size={20} />
              </button>
              <button className="px-8 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center gap-2">
                ডোনার খুঁজুন
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
