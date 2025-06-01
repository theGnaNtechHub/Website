import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="theGnaN Tech Hub Logo"
            className="w-[200px] h-[65px] sm:w-[250px] sm:h-[80px] md:w-[300px] md:h-[100px] lg:w-[350px] lg:h-[115px]"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {["vision", "approach", "projects", "programs"].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`font-medium text-sm transition-colors ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-700"
                  : "text-black hover:text-orange-300"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("join")}
            className="flex items-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Get Started <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-blue-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-blue-700" />
          ) : (
            <Menu className="h-6 w-6 text-blue-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {["vision", "approach", "projects", "programs"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-gray-700 hover:text-blue-700 font-medium py-2 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("join")}
              className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
            >
              Get Started <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
