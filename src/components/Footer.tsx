import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-teal mb-4">Cambroos</h3>
            <p className="text-white/70 leading-relaxed">
              Singapore's premier film equipment rental partner for professional productions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#equipment" className="text-white/70 hover:text-teal transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#studio" className="text-white/70 hover:text-teal transition-colors">
                  Studio Rentals
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-teal transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/70 hover:text-teal transition-colors">
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
                <a href="#contact" className="text-white/70 hover:text-teal transition-colors">
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
                <span className="text-white/70">+65 1234 5678</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Singapore</span>
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
