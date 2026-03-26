import React from 'react';
import { motion } from 'framer-motion';
import { Star, Download, CheckCircle } from 'lucide-react';

const AppDownload = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16 relative overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10" />

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8"
            >
              <Download size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Google Play Store এ পাওয়া যাচ্ছে</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              জেলা সেবা অ্যাপ <br />
              <span className="text-primary">ডাউনলোড করুন আজই</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0"
            >
              আপনার প্রয়োজনীয় সব তথ্য ও সেবা এখন আপনার হাতের মুঠোয়। দ্রুত ও নিরাপদ সার্ভিসের জন্য আজই আমাদের অ্যাপটি ডাউনলোড করুন।
            </motion.p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <Star className="text-yellow-500 fill-yellow-500" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">৪.৯</p>
                  <p className="text-xs text-slate-500">গড় রেটিং</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Download className="text-primary" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">৫ লক্ষ+</p>
                  <p className="text-xs text-slate-500">ডাউনলোড</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                  <CheckCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">১০০%</p>
                  <p className="text-xs text-slate-500">ফ্রি অ্যাপ</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-14" />
              </a>
              <a href="#" className="transition-transform hover:scale-105">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-14" />
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800"
                alt="App Preview"
                className="w-[300px] md:w-[350px] mx-auto rounded-[2.5rem] shadow-2xl border-4 border-slate-800"
              />
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full -z-10" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
