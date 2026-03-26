import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import { MapPin, Navigation, Info } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="py-24 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Map Image */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                alt="Bangladesh Map"
                className="w-full h-[500px] object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
              
              {/* Location Markers */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-1/4 left-1/3 text-primary"
              >
                <MapPin size={40} className="fill-primary/20" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 text-secondary"
              >
                <MapPin size={40} className="fill-secondary/20" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="absolute bottom-1/3 right-1/4 text-accent"
              >
                <MapPin size={40} className="fill-accent/20" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right: Info Panel */}
          <div className="flex-1">
            <SectionTitle
              badge="জেলা কভারেজ"
              title="আমরা আছি আপনার জেলায়"
              subtitle="ধীরে ধীরে সারা বাংলাদেশে সম্প্রসারিত হচ্ছে জেলা সেবা। প্রতিটি জেলার স্থানীয় চাহিদা ও সার্ভিস আমরা কভার করছি।"
              centered={false}
            />

            <div className="space-y-6">
              {[
                { city: 'ঢাকা জেলা', status: 'সক্রিয়', providers: '৫০০+ প্রোভাইডার' },
                { city: 'সাতক্ষীরা জেলা', status: 'সক্রিয়', providers: '২০০+ প্রোভাইডার' },
                { city: 'খুলনা জেলা', status: 'সক্রিয়', providers: '৩০০+ প্রোভাইডার' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <Navigation size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{item.city}</h4>
                      <p className="text-slate-500 text-sm">{item.providers}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold">
                    {item.status}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-4">
              <Info className="text-primary shrink-0" size={24} />
              <p className="text-slate-400 text-sm leading-relaxed">
                আপনার জেলায় জেলা সেবা না থাকলে আমাদের জানান। আমরা খুব শীঘ্রই আপনার এলাকায় সেবা পৌঁছে দিতে কাজ করছি।
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
