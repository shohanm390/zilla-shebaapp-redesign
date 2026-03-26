import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">জে</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                জেলা <span className="text-primary">সেবা</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              বাংলাদেশর ১ নম্বর ডিজিটাল সার্ভিস প্ল্যাটফর্ম। আপনার জেলার প্রয়োজনীয় সব তথ্য ও সেবা এখন এক অ্যাপেই।
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4">
              {['হোম', 'সার্ভিস সমূহ', 'আমাদের সম্পর্কে', 'যোগাযোগ', 'প্রাইভেসি পলিসি'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">সেবা সমূহ</h4>
            <ul className="space-y-4">
              {['ডেলিভারি সেবা', 'হোম সার্ভিস', 'ডাক্তার অ্যাপয়েন্টমেন্ট', 'ব্লাড ডোনার', 'পর্যটন তথ্য'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">যোগাযোগ</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>হাউস#১২, রোড#০৩, সেক্টর#০৭, উত্তরা, ঢাকা-১২৩০</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="text-primary shrink-0" size={20} />
                <span>info@zilaseba.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © ২০২৬ জেলা সেবা (Zila Seba). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex items-center gap-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
