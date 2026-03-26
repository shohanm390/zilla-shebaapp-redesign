import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../../data/services';
import SectionTitle from '../Common/SectionTitle';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="সেবা সমূহ"
          title="স্থানীয় সেবা আপনার হাতের কাছে"
          subtitle="উন্নত প্রযুক্তির ছোঁয়ায় এখন আপনার জেলার যেকোনো সেবা পাওয়া আরও সহজ ও সাশ্রয়ী।"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-3xl overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-lg bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {service.badge}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  সার্ভিস নিন
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-slate-300 font-bold hover:bg-white/10 transition-all"
          >
            সকল সার্ভিসের তালিকা দেখুন
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;
