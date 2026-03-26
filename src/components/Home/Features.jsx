import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import { ShieldCheck, Clock, PhoneCall, UserCheck, Star, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'নিরাপদ পেমেন্ট',
      desc: 'বিকাশ, নগদ ও রকেটের মাধ্যমে নিরাপদ পেমেন্ট সুবিধা।',
      icon: ShieldCheck,
      color: 'bg-blue-500/10 text-blue-500'
    },
    {
      title: '২৪/৭ কাস্টমার সাপোর্ট',
      desc: 'যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিম সবসময় আপনার পাশে।',
      icon: PhoneCall,
      color: 'bg-purple-500/10 text-purple-500'
    },
    {
      title: 'দক্ষ সার্ভিস প্রোভাইডার',
      desc: 'আমাদের সকল প্রোভাইডার ভেরিফাইড ও দক্ষ কারিগর।',
      icon: UserCheck,
      color: 'bg-cyan-500/10 text-cyan-500'
    },
    {
      title: 'দ্রুত ডেলিভারি',
      desc: 'আপনার প্রয়োজনীয় পণ্য বা সেবা দ্রুততম সময়ে পৌঁছে যাবে।',
      icon: Zap,
      color: 'bg-orange-500/10 text-orange-500'
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <SectionTitle
              badge="ফিচারস"
              title="আপনার সুরক্ষা আমাদের সর্বোচ্চ প্রতিশ্রুতি"
              subtitle="আধুনিক প্রযুক্তি ও প্রশিক্ষিত টিমের সমন্বয়ে তৈরি একটি সম্পূর্ণ নির্ভরযোগ্য প্ল্যাটফর্ম।"
              centered={false}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${feature.color}`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Card Box */}
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <ShieldCheck size={120} className="text-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-8">
                  <Star className="text-primary fill-primary" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">আপনার পণ্য বিক্রয় করুন সারা বাংলাদেশে</h3>
                <p className="text-slate-400 mb-10 leading-relaxed text-lg">
                  দেশের সকল জেলার মানুষের কাছে আপনার পণ্য বা সার্ভিস পৌঁছে দিতে জেলা সেবা অ্যাপে আজই মার্চেন্ট হিসেবে যুক্ত হোন।
                </p>
                <button className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-2xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                  মার্চেন্ট হিসেবে যোগ দিন
                </button>
                <p className="text-center mt-6 text-sm text-slate-500">
                  ইতিমধ্যেই ১০,০০০+ মার্চেন্ট আমাদের সাথে যুক্ত আছেন
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
