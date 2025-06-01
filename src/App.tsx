import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import VisionSection from './components/VisionSection';
import ApproachSection from './components/ApproachSection';
import ProjectsSection from './components/ProjectsSection';
import ProgramsSection from './components/ProgramsSection';
import JoinSection from './components/JoinSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "theGnaN - Master Logic. Build Tomorrow's Tech.";
    
    // Add animations on scroll (simple implementation)
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.85) {
          element.classList.add('aos-animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check for elements in view
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden">
      <Header />
      <HeroSection />
      <VisionSection />
      <ApproachSection />
      <ProjectsSection />
      <ProgramsSection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;