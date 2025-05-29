import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MesoneedlingPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/3985356/pexels-photo-3985356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center text-white"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Mesoneedling</h1>
          <p className="text-xl max-w-3xl mx-auto">Advanced skin rejuvenation combining microneedling with targeted nutrient delivery</p>
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="font-serif text-3xl font-medium mb-6">Transform Your Skin</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Mesoneedling is an advanced skincare treatment that combines the benefits of microneedling with the infusion of highly effective serums tailored to your skin's needs. This innovative approach creates microchannels in the skin while simultaneously delivering powerful nutrients directly where they're needed most.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Unlike traditional treatments, mesoneedling provides immediate and long-lasting results by stimulating your skin's natural healing response while nourishing it with essential vitamins, peptides, and hyaluronic acid.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Enhanced collagen production for firmer, younger-looking skin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Deep hydration through hyaluronic acid infusion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Improved texture and reduced appearance of scars</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Minimized pores and refined skin surface</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Treatment Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Face and neck for overall rejuvenation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Décolletage area for sun damage repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Specific areas with acne scarring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Zones with uneven pigmentation</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Treatment Process */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h3 className="font-serif text-2xl font-medium mb-6">The Treatment Process</h3>
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">1. Consultation & Preparation</h4>
                  <p className="text-neutral-600">Your journey begins with a thorough skin assessment and customized treatment plan.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">2. The Procedure</h4>
                  <p className="text-neutral-600">Using state-of-the-art technology, we create microscopic channels while infusing beneficial nutrients.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">3. Recovery & Results</h4>
                  <p className="text-neutral-600">Minimal downtime with visible improvements in skin quality within days.</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <p className="text-lg text-neutral-700 mb-6">
                Ready to experience the transformative effects of mesoneedling?
              </p>
              <a 
                href="https://carmaaesthetics.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
              >
                Schedule Your Treatment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}