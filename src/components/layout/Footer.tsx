import { Instagram, Facebook, Clock, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <span className="font-serif text-2xl font-bold tracking-tighter text-accent">
                Carma
              </span>
              <span className="font-serif text-2xl ml-1 text-white">
                Aesthetics
              </span>
            </div>
            <p className="text-sm text-neutral-400 mb-6">
              Elevating natural beauty with personalized aesthetic treatments in a luxurious, welcoming environment.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/carma_aesthetics" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/CarmaAesthetics" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@carmaaesthetics" 
                target="_blank" 
                rel="noreferrer"
                className="text-neutral-400 hover:text-accent transition-colors"
              >
                <svg 
                  className="h-5 w-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298.006.595.041.885.105V9.4a6.13 6.13 0 0 0-1-.08A6.25 6.25 0 0 0 5 20.83a6.18 6.18 0 0 0 9.18-5.29V9.91a8.16 8.16 0 0 0 5.42 2.05V8.5a4.84 4.84 0 0 1-2.83-.9c.008.025.016.05.025.075L19.59 6.69Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-accent transition-colors">Our Team</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/faq" className="hover:text-accent transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=14015+West+Colonial+Dr+Suite+23,+Winter+Garden,+FL+34787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  14015 West Colonial Dr Suite 23, Winter Garden, FL 34787
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent shrink-0" />
                <a href="mailto:info@carmaaesthetics.com" className="hover:text-accent transition-colors">
                  info@carmaaesthetics.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent shrink-0" />
                <a href="tel:+16893077000" className="hover:text-accent transition-colors">(689) 307-7000</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">Monday — Friday</p>
                  <p className="text-neutral-400">10 am — 5 pm</p>
                </div>
              </li>
              <li className="flex items-start mt-3">
                <div className="h-5 w-5 mr-3 shrink-0" />
                <div>
                  <p className="font-medium">Saturday — Sunday</p>
                  <p className="text-neutral-400">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-800 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Carma Aesthetics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}