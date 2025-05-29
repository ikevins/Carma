import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.state]);

  return (
    <>
      {/* Video Hero */}
      <div className="relative h-screen">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative h-full flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white font-medium mb-6">
                Discover Your Natural Beauty
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Experience personalized aesthetic treatments in a luxurious, comfortable environment
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://carmaaesthetics.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl transition-colors duration-200 group"
                >
                  Book Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => document.getElementById('why-choose-us')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur-sm transition-colors duration-200"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="font-serif text-4xl font-medium mb-6">Why Choose Us?</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: "Expert Care",
                description: "Our staff has extensive training in aesthetic medicine/plastic surgery and are dedicated to your safety and satisfaction."
              },
              {
                title: "Customized Treatments",
                description: "We understand that every client is unique. Our personalized approach ensures that we tailor treatments to address your specific goals and concerns."
              },
              {
                title: "Luxurious Experience",
                description: "Enjoy a luxurious and comfortable environment designed to make your visit as relaxing as it is transformative."
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: index % 2 === 1 ? -20 : 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform" />
                  <div className="relative h-full bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-xl transition-all">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="font-serif text-3xl font-medium text-accent">0{index + 1}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-medium mb-4">{feature.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-1" />
              <div className="relative bg-white rounded-3xl shadow-xl p-12 text-center">
                <h2 className="font-serif text-4xl font-medium mb-6">Start Your Journey Today</h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Transform your confidence with our personalized aesthetic treatments. Book your consultation now and discover the best version of yourself.
                </p>
                <a
                  href="https://carmaaesthetics.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl transition-colors duration-200 group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}