import React from 'react';
import { BarChart as FlowChart, Puzzle, Database, Bot } from 'lucide-react';

const ApproachSection: React.FC = () => {
  const pillars = [
    {
      icon: <FlowChart className="h-12 w-12 text-blue-700" />,
      title: "Logic Building",
      description: "Master flowcharts & pseudo-code for rock-solid designs.",
      color: "bg-blue-100 border-blue-200"
    },
    {
      icon: <Puzzle className="h-12 w-12 text-orange-600" />,
      title: "Problem Solving",
      description: "Apply structured frameworks to crack any technical challenge.",
      color: "bg-orange-100 border-orange-200"
    },
    {
      icon: <Database className="h-12 w-12 text-blue-700" />,
      title: "Data Structures & Algos",
      description: "Optimize for performance, efficiency, and scale.",
      color: "bg-blue-100 border-blue-200"
    },
    {
      icon: <Bot className="h-12 w-12 text-orange-600" />,
      title: "AI & Machine Learning",
      description: "Turn data into insight with hands-on projects.",
      color: "bg-orange-100 border-orange-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="approach">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            From Concept to Code
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-700">
            Our proven methodology builds a strong foundation for technical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.color} border rounded-xl p-8 transition-all hover:shadow-lg`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start">
                <div className="mr-6">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gradient-to-r from-blue-800 to-blue-700 rounded-2xl p-8 md:p-10 text-white shadow-xl learning-philosophy">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Learning Philosophy</h3>
          <p className="text-blue-100 mb-6 text-center">
            We don't just teach coding—we cultivate a deep understanding of computational thinking.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <span>Understand</span>
            </div>
            <div className="hidden md:block text-blue-400">→</div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <span>Design</span>
            </div>
            <div className="hidden md:block text-blue-400">→</div>
            <div className="flex items-center">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <span>Implement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;