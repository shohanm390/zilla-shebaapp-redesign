import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/testimonials';
import SectionTitle from '../Common/SectionTitle';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="টেস্টিমোনিয়াল"
          title="হাজারো মানুষের বিশ্বাসই আমাদের শক্তি"
          subtitle="সারা বাংলাদেশ থেকে আমাদের ব্যবহারকারীদের দেওয়া কিছু মূল্যবান মতামত।"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-3xl relative group"
            >
              <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={48} className="text-primary" />
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < item.rating ? 'text-yellow-500 fill-yellow-500' : 'text-slate-600'}
                  />
                ))}
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed italic">
                "{item.review}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full border-2 border-primary/20"
                />
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-slate-500 text-xs">{item.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
