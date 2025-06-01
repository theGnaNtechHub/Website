import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="hero">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/80"></div>
        {/* Abstract pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('/home/project/src/components/Picsart_25-05-27_18-29-39-369.png')]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Master Logic. <span className="text-orange-400">Build Tomorrow's Tech.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            A mission-driven community forging the next generation of problem-solvers through hands-on logic, pseudo-code, and flowchart learning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('join')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-md transition-all transform hover:scale-105 flex items-center justify-center"
            >
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button 
              onClick={() => scrollToSection('approach')}
              className="bg-transparent border-2 border-white hover:border-orange-300 text-white hover:text-orange-300 font-medium px-8 py-3 rounded-md transition-colors flex items-center justify-center"
            >
              See How It Works
              <PlayCircle className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -bottom-16 left-0 w-full h-32 bg-white transform skew-y-3 z-0"></div>
    </section>
  );
};

export default HeroSection;