import React, { useState } from 'react';
import { CodeSquare, PenTool, LayoutGrid, Zap } from 'lucide-react';

const ProgramsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const programs = [
    {
      icon: <PenTool className="h-10 w-10 text-blue-700" />,
      title: "Foundational Programming",
      topics: ["Flowcharts", "Pseudo-code", "Logic Thinking"],
      description: "Master the core principles of computational thinking and problem-solving before diving into code syntax. Perfect for beginners with no prior experience."
    },
    {
      icon: <CodeSquare className="h-10 w-10 text-blue-700" />,
      title: "Advanced Programming",
      topics: ["Data Structures", "OOP", "Problem Solving"],
      description: "Deepen your understanding of programming concepts with advanced techniques. Learn to write efficient, maintainable code and tackle complex problems."
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-blue-700" />,
      title: "Full-Stack Development",
      topics: ["MERN Stack", "API Design", "DevOps Essentials"],
      description: "Build complete web applications from front to back. Master modern frameworks, API design patterns, and deployment strategies for real-world projects."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-700" />,
      title: "Emerging Technologies",
      topics: ["AI/ML", "Blockchain", "Cloud Computing"],
      description: "Stay at the cutting edge with skills in the fastest-growing tech fields. Apply your foundation to the technologies shaping our future."
    }
  ];

  return (
    <section className="py-20 bg-blue-50" id="programs">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Your Pathway to Expertise
          </h2>
          <p className="text-lg text-gray-700">
            Structured learning paths that take you from fundamentals to mastery.
          </p>
        </div>

        {/* Program tabs */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-10">
          <div className="flex flex-wrap">
            {programs.map((program, index) => (
              <button
                key={index}
                className={`flex-1 min-w-[150px] py-4 px-2 text-center transition-colors ${
                  activeTab === index 
                    ? 'bg-blue-700 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="text-sm md:text-base font-medium">
                  {program.title}
                </span>
              </button>
            ))}
          </div>

          {/* Active program content */}
          <div className="p-8 md:p-12">
            <div className="md:flex items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center">
                  {programs[activeTab].icon}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-blue-800 mb-4">
                  {programs[activeTab].title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-6">
                  {programs[activeTab].topics.map((topic, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 rounded-full px-4 py-1 text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {programs[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Program grid for mobile (always visible) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:hidden">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 border ${
                activeTab === index 
                  ? 'border-blue-500 bg-white shadow-md' 
                  : 'border-gray-200 bg-white'
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  {program.icon}
                </div>
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  {program.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {program.topics.map((topic, topicIndex) => (
                    <span 
                      key={topicIndex}
                      className="bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;