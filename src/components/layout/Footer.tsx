import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  ChevronRight 
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info - Only logo changed here */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-black p-2 rounded">
                <img 
                  src="/src/images/cj.png" 
                  alt="cjkare3 technology" 
                  className="h-8"
                />
              </div>
              <h3 className="text-2xl font-bold">
                <span>CJKARE3</span>
                <span className="text-accent"> TECH</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for innovative IT solutions in Tanzania. We transform ideas into digital reality.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/cjkare3technology" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://www.instagram.com/cjkare3.echnology1234" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Unchanged */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary before:rounded-full">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Portfolio', 'Team', 'Contact'].map((item) => (
                <li key={item} className="transition-colors hover:text-primary">
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="flex items-center">
                    <ChevronRight size={16} className="mr-2 text-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Unchanged */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary before:rounded-full">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                'Web Development', 
                'Graphic Design', 
                'Animation', 
                'Video Editing',
                'Mobile App Development',
                'Digital Marketing'
              ].map((service) => (
                <li key={service} className="transition-colors hover:text-primary">
                  <Link to="/services" className="flex items-center">
                    <ChevronRight size={16} className="mr-2 text-primary" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Unchanged */}
          <div>
            <h4 className="text-xl font-semibold mb-6 relative pb-2 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-12 before:h-1 before:bg-primary before:rounded-full">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-primary mt-1 flex-shrink-0" />
                <span>Mwanza, Tanzania</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="tel:+255676027855" className="hover:text-primary transition-colors">
                  +255 676 027 855
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="tel:+255616083055" className="hover:text-primary transition-colors">
                  +255 616 083 055
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-primary flex-shrink-0" />
                <a href="mailto:erastojelemia@gmail.com" className="hover:text-primary transition-colors">
                  erastojelemia@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer - Unchanged */}
        <div className="pt-8 border-t border-gray-800 text-center md:flex md:justify-between md:items-center">
          <p>&copy; {currentYear} CJKARE3 TECHNOLOGY. All Rights Reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary mx-2 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary mx-2 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;