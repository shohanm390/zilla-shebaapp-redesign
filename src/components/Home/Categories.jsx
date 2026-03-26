import React from 'react';
import { motion } from 'framer-motion';
import { categories } from '../../data/categories';
import SectionTitle from '../Common/SectionTitle';

const Categories = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <SectionTitle
          badge="ক্যাটাগরি"
          title="এক অ্যাপে সব তথ্য"
          subtitle="আপনার জেলার প্রয়োজনীয় সব তথ্য ও সেবা এখন এক অ্যাপেই পাবেন। সহজেই খুঁজে নিন আপনার প্রয়োজনীয় সার্ভিসটি।"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 lg:row-span-2 relative group overflow-hidden rounded-3xl"
          >
            <img
              src={categories[0].image}
              alt={categories[0].title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10">
              <h3 className="text-3xl font-bold text-white mb-3">{categories[0].title}</h3>
              <p className="text-slate-300 max-w-md mb-6">{categories[0].description}</p>
              <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                বিস্তারিত দেখুন →
              </button>
            </div>
          </motion.div>

          {/* Small Cards */}
          {categories.slice(1).map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-3xl h-72"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">{cat.description}</p>
                <button className="text-primary text-sm font-bold flex items-center gap-2">
                  বিস্তারিত →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
