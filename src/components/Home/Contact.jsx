import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../Common/SectionTitle';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Button from '../Common/Button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: Contact Info */}
          <div className="flex-1">
            <SectionTitle
              badge="যোগাযোগ"
              title="আমাদের সাথে কথা বলুন"
              subtitle="আপনার যেকোনো প্রশ্ন বা পরামর্শ আমাদের জানান। আমরা সবসময় আপনার সহায়তায় প্রস্তুত।"
              centered={false}
            />

            <div className="space-y-8 mt-12">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">ফোন করুন</h4>
                  <p className="text-slate-400">+৮৮০ ১৭০০-০০০০০০</p>
                  <p className="text-slate-500 text-sm">সকাল ৯টা - রাত ১০টা</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">ইমেইল করুন</h4>
                  <p className="text-slate-400">info@zilaseba.com</p>
                  <p className="text-slate-500 text-sm">২৪/৭ কাস্টমার সাপোর্ট</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">আমাদের অফিস</h4>
                  <p className="text-slate-400">হাউস#১২, রোড#০৩, সেক্টর#০৭</p>
                  <p className="text-slate-500 text-sm">উত্তরা, ঢাকা-১২৩০, বাংলাদেশ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-10 rounded-[2.5rem]"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">আপনার নাম</label>
                    <input
                      type="text"
                      placeholder="নাম লিখুন"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400 ml-1">ফোন নম্বর</label>
                    <input
                      type="tel"
                      placeholder="০১৭XXXXXXXX"
                      className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">ইমেইল (ঐচ্ছিক)</label>
                  <input
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400 ml-1">আপনার বার্তা</label>
                  <textarea
                    rows="4"
                    placeholder="আপনার মতামত বা প্রশ্ন এখানে লিখুন..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 transition-all resize-none"
                  ></textarea>
                </div>

                <Button variant="primary" className="w-full py-4 text-lg">
                  বার্তা পাঠান
                  <Send size={20} />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
