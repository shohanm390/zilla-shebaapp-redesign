import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, CheckCircle } from 'lucide-react';
import Button from '../Common/Button';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <Star className="text-yellow-400 fill-yellow-400" size={16} />
              <span className="text-sm font-medium text-slate-300">সেরা জেলা ভিত্তিক অনলাইন সেবা</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-[1.1]"
            >
              দেশের <span className="text-primary">১ নম্বর</span> <br />
              <span className="text-gradient">ডিজিটাল প্ল্যাটফর্ম</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              রাইড শেয়ারিং, ডাক্তার অ্যাপয়েন্টমেন্ট, জরুরি ব্লাড ডোনার, ফুড ডেলিভারি - সব এক অ্যাপেই। আপনার জীবনকে সহজ করতে আমরা আছি আপনার পাশে।
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <Button variant="primary" className="px-8 py-4 text-lg">
                অ্যাপটি ডাউনলোড করুন
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="px-8 py-4 text-lg">
                সেবা সমূহ দেখুন
              </Button>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {[
                { icon: Shield, text: 'নিরাপদ সার্ভিস' },
                { icon: Zap, text: 'দ্রুত ডেলিভারি' },
                { icon: CheckCircle, text: '২৪/৭ সাপোর্ট' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-400">
                  <item.icon className="text-primary" size={18} />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image/Mockup */}
          <div className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Main Phone Mockup */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative mx-auto w-[280px] md:w-[320px] lg:w-[380px]"
              >
                <div className="relative rounded-[3rem] border-[8px] border-slate-800 bg-slate-900 overflow-hidden shadow-2xl shadow-primary/20">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
                    alt="App Interface"
                    className="w-full h-full object-cover opacity-80"
                  />
                  {/* Floating UI Elements inside phone */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                </div>

                {/* Floating Badges around phone */}
                <motion.div
                  animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-12 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle className="text-green-500" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">সফল ডেলিভারি</p>
                    <p className="text-sm font-bold text-white">৫০,০০০+</p>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-20 -left-16 glass p-4 rounded-2xl flex items-center gap-3 shadow-2xl"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Star className="text-primary fill-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">রেটিং</p>
                    <p className="text-sm font-bold text-white">৪.৯/৫</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
