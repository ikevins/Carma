import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, ChevronDown } from 'lucide-react';
import { services } from '../../data/services';

const navLinks = [
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Services', href: '/services' },
  { name: 'FAQs', href: '/faq' },
  { name: 'Contact', href: '/contact' },
  { name: 'Resources', href: '/resources', dropdown: [
    { name: 'All Resources', href: '/resources' },
    { name: 'Dermal Fillers Care Guide', href: '/resources/dermal-fillers-care' },
    { name: 'Mesoneedling Care Guide', href: '/resources/mesoneedling-care' }
  ] },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const location = useLocation();
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
  const servicesTimeoutRef = useRef<number>();
  const resourcesTimeoutRef = useRef<number>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      window.clearTimeout(servicesTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = window.setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      window.clearTimeout(resourcesTimeoutRef.current);
    }
    setResourcesOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    resourcesTimeoutRef.current = window.setTimeout(() => {
      setResourcesOpen(false);
    }, 150);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled || location.pathname !== '/'
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-serif text-2xl font-bold tracking-tighter text-accent">
              Carma
            </span>
            <span className={`font-serif text-2xl ml-1 ${scrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'}`}>
              Aesthetics
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link, index) => {
            if (index === 2) { // Services dropdown
              return (
                <div 
                  key="services"
                  ref={servicesDropdownRef}
                  onMouseEnter={handleServicesMouseEnter}
                  onMouseLeave={handleServicesMouseLeave}
                  className="relative group"
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                      scrolled || location.pathname !== '/'
                        ? 'text-neutral-700 hover:text-accent' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 transition-all duration-200 ${
                      servicesOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      All Services
                    </Link>
                    <div className="h-px bg-neutral-200 my-2"></div>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            if (link.dropdown) { // Resources dropdown
              return (
                <div 
                  key={link.name}
                  ref={resourcesDropdownRef}
                  onMouseEnter={handleResourcesMouseEnter}
                  onMouseLeave={handleResourcesMouseLeave}
                  className="relative group"
                >
                  <button
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${
                      scrolled || location.pathname !== '/'
                        ? 'text-neutral-700 hover:text-accent' 
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div
                    className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg py-2 transition-all duration-200 ${
                      resourcesOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    {link.dropdown.map((item, idx) => (
                      <>
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 transition-colors"
                          onClick={() => setResourcesOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {idx === 0 && <div className="h-px bg-neutral-200 my-2"></div>}
                      </>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled || location.pathname !== '/'
                    ? 'text-neutral-700 hover:text-accent' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a 
            href="https://carmaaesthetics.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 text-sm font-medium bg-primary text-neutral-800 rounded-md hover:bg-primary-dark transition-colors duration-200"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className={scrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="pt-2 pb-4 space-y-1 px-4">
            {navLinks.map((link, index) => {
              if (index === 2) { // Services dropdown
                return (
                  <div key="services\" className="space-y-1">
                    <Link
                      to="/services"
                      className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-accent w-full text-left"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      All Services
                    </Link>
                    {services.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        className="block px-3 py-2 pl-6 text-sm text-neutral-600 hover:text-accent w-full text-left"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                );
              }
              if (link.dropdown) { // Resources dropdown
                return (
                  <div key={link.name} className="space-y-1">
                    {link.dropdown.map((item, idx) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={`block px-3 py-2 ${idx === 0 ? 'text-base font-medium' : 'text-sm pl-6'} text-neutral-700 hover:text-accent w-full text-left`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block px-3 py-2 text-base font-medium text-neutral-700 hover:text-accent w-full text-left"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}
            <a
              href="https://carmaaesthetics.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 px-5 py-3 text-center font-medium bg-primary text-neutral-800 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book Now
            </a>
            <div className="flex items-center justify-center space-x-4 mt-4 pt-4 border-t border-neutral-200">
              <a href="https://www.instagram.com/carma_aesthetics" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-accent">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/CarmaAesthetics" target="_blank" rel="noreferrer" className="text-neutral-600 hover:text-accent">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}