import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../ui/Section';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data/services';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Section 
      id="services" 
      title="Our Services"
      subtitle="Experience advanced aesthetic treatments tailored to enhance your natural beauty"
    >
      <div className="max-w-7xl mx-auto">
        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Featured Service Carousel */}
        <div className="relative h-[300px] rounded-2xl overflow-hidden bg-neutral-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
              <img 
                src={services[currentIndex].imageUrl} 
                alt={services[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center">
                <div className="container">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-xl text-white"
                  >
                    <h3 className="font-serif text-2xl font-medium mb-2">
                      {services[currentIndex].title}
                    </h3>
                    <p className="text-sm mb-4 text-neutral-200">
                      {services[currentIndex].description}
                    </p>
                    <Link 
                      to={`/services/${services[currentIndex].slug}`}
                      className="inline-flex items-center px-4 py-2 bg-white text-neutral-900 rounded-md text-sm font-medium hover:bg-neutral-100 transition-colors group"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}