import React from 'react';
import Navbar from '../components/Common/Navbar';
import Footer from '../components/Common/Footer';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Categories from '../components/Home/Categories';
import Services from '../components/Home/Services';
import Features from '../components/Home/Features';
import CTA from '../components/Home/CTA';
import AppDownload from '../components/Home/AppDownload';
import Testimonials from '../components/Home/Testimonials';
import MapSection from '../components/Home/MapSection';
import Contact from '../components/Home/Contact';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <Services />
        <Features />
        <CTA />
        <AppDownload />
        <Testimonials />
        <MapSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
