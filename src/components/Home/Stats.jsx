import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, UserCheck, Map } from 'lucide-react';

const Stats = () => {
  const stats = [
    { label: 'মোট ব্যবহারকারী', value: '৫ লক্ষ+', icon: Users, color: 'text-blue-400' },
    { label: 'সার্ভিস ক্যাটাগরি', value: '১০০+', icon: Briefcase, color: 'text-purple-400' },
    { label: 'দক্ষ প্রোভাইডার', merchant: '১৫০+', icon: UserCheck, color: 'text-cyan-400' },
    { label: 'জেলা কভারেজ', value: '৬৪', icon: Map, color: 'text-emerald-400' },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl text-center group"
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300`}>
                <stat.icon className={`${stat.color}`} size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-white mb-2">{stat.value || stat.merchant}</h3>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
