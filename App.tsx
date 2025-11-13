
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Method from './components/Method';
import Pricing from './components/Pricing';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';

const App: React.FC = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-gray-100 overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-800/10 via-transparent to-transparent z-0"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SocialProof />
          <Method />
          <Pricing />
          <CtaSection />
        </main>
        <Footer />
        <FloatingCta />
      </div>
    </div>
  );
};

export default App;