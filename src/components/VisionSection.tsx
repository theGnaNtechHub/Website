import React from 'react';
import { Brain, Rocket, Users, Lightbulb } from 'lucide-react';

const VisionSection: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-10 w-10 text-orange-500" />,
      title: "Logic-First Curriculum",
      description: "Build deep understanding before syntax."
    },
    {
      icon: <Rocket className="h-10 w-10 text-orange-500" />,
      title: "Project-Driven Mastery",
      description: "Real-world challenges from Day 1."
    },
    {
      icon: <Users className="h-10 w-10 text-orange-500" />,
      title: "Global Community",
      description: "Collaborate, share, and grow with peers worldwide."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-orange-500" />,
      title: "Emerging Tech Focus",
      description: "AI, ML, blockchain, and beyond—stay ahead of the curve."
    }
  ];

  const scrollToPhilosophy = () => {
    const philosophySection = document.querySelector('.learning-philosophy');
    if (philosophySection) {
      philosophySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white relative" id="vision">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Rethinking Tech Education
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At theGnaN, we believe breakthrough innovation starts with razor-sharp logic. 
            We blend foundational thinking exercises with cutting-edge tools to create 
            engineers who don't just code—they architect solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <button 
            onClick={scrollToPhilosophy}
            className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md transition-colors"
          >
            Explore Our Method
          </button>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-orange-100 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 md:w-48 md:h-48 bg-blue-100 rounded-full translate-y-1/3 -translate-x-1/4 opacity-40"></div>
    </section>
  );
};

export default VisionSection;