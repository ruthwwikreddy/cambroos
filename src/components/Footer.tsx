import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHashLink = (hash: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/${hash}`);
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    } else {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        // For missing sections, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="contact" className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-teal mb-4">CAMBROO SG PTE. LTD.</h3>
            <p className="text-white/70 leading-relaxed">
              Singapore's premier film equipment rental partner for professional productions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#equipment" 
                  onClick={(e) => handleHashLink('#equipment', e)}
                  className="text-white/70 hover:text-teal transition-colors cursor-pointer"
                >
                  Equipment
                </a>
              </li>
              <li>
                <a 
                  href="#studio" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-white/70 hover:text-teal transition-colors cursor-pointer"
                >
                  Studio Rentals
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleHashLink('#about', e)}
                  className="text-white/70 hover:text-teal transition-colors cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#portfolio" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== '/') {
                      navigate('/');
                      setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="text-white/70 hover:text-teal transition-colors cursor-pointer"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleHashLink('#contact', e)}
                  className="text-white/70 hover:text-teal transition-colors cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/70">info@cambroos.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/70">(+65)80875865</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/70">200 JALAN SULTAN, #03-45, TEXTILE CENTRE, SINGAPORE 199018</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Cambroos. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-teal transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
