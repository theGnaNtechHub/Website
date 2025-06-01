import React, { useState } from 'react';
import { MapPin, Code2 } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    {
      icon: <MapPin className="h-14 w-14 text-orange-500" />,
      title: "theGnaN's - VtracK",
      description: "Track live vehicle locations and ETAs for smoother commutes.",
      image: "https://images.pexels.com/photos/385998/pexels-photo-385998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["GPS Integration", "ETAs Algorithm", "User Notifications"]
    },
    {
      icon: <Code2 className="h-14 w-14 text-orange-500" />,
      title: "theGnaN's - VteacH",
      description: "Advanced learning platform with pseudo code editor and flowchart evaluator.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      features: ["Pseudo Code Editor", "Flowchart Evaluator", "Interactive Learning"]
    }
  ];

  const toggleProject = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">
            Build Real Products, Not Just Toys
          </h2>
          <p className="text-lg text-gray-700">
            Our students create industry-ready solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="space-y-6">
              <div 
                className={`cursor-pointer rounded-xl p-6 transition-all ${
                  activeProject === index 
                    ? 'bg-blue-700 text-white shadow-lg' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => toggleProject(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-full ${activeProject === index ? 'bg-blue-600' : 'bg-blue-50'} flex items-center justify-center`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${activeProject === index ? 'text-white' : 'text-blue-800'}`}>
                      {project.title}
                    </h3>
                    <p className={activeProject === index ? 'text-blue-100' : 'text-gray-600'}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Expandable content */}
              {activeProject === index && (
                <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform animate-fade-in">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;