import React from "react";
import { Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0 md:w-1/3">
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="theGnaN Tech Hub Logo"
                className="w-[200px] h-[65px] sm:w-[250px] sm:h-[80px] md:w-[300px] md:h-[100px] lg:w-[350px] lg:h-[115px] drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              theGnaN Tech Hub — Where Logic Meets Innovation.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.instagram.com/_thegnan_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/919014828255"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/thegnantechhub/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/theGnaNTechHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@theGnaNTechHub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@thegnan.in"
                className="text-gray-400 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="text-gray-400">
              <p className="mb-2">Contact: +91 9014828255</p>
              <p>Email: contact@thegnan.in</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-lg mb-4">Programs</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Foundational Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Advanced Programming
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Emerging Technologies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Community Forum
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Tutorial Videos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} theGnaN Tech Hub. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-orange-500 transition-colors mr-6"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-orange-500 transition-colors mr-6"
            >
              Terms of Service
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
