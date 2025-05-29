import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DermalFillersPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center text-white"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Dermal Fillers</h1>
          <p className="text-xl max-w-3xl mx-auto">Restore volume and enhance your natural features</p>
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
              <h2 className="font-serif text-3xl font-medium mb-6">Enhance Your Features</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Dermal fillers are injectable treatments that restore volume, enhance facial contours, and smooth deep lines. Using premium hyaluronic acid-based products, we can achieve natural-looking results that complement your features while maintaining facial harmony.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our expert injectors understand facial anatomy and use advanced techniques to create subtle, beautiful results that enhance your natural beauty without looking overdone.
              </p>
            </motion.div>

            {/* Treatment Areas */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Popular Treatment Areas</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Lips - Enhancement and definition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Cheeks - Volume restoration and contouring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Nasolabial Folds - Softening smile lines</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Under Eyes - Reducing hollow appearance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Chin & Jawline - Definition and contouring</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Immediate results with minimal downtime</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Natural-looking volume enhancement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Long-lasting results (6-18 months)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Customizable treatment plans</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Reversible if desired</span>
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
              <h3 className="font-serif text-2xl font-medium mb-6">The Treatment Experience</h3>
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">Consultation</h4>
                  <p className="text-neutral-600">Thorough assessment and customized treatment planning to achieve your desired results.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Comfort Measures</h4>
                  <p className="text-neutral-600">Topical numbing and advanced techniques ensure a comfortable experience.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Recovery</h4>
                  <p className="text-neutral-600">Minimal downtime with most patients returning to normal activities immediately.</p>
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
                Ready to enhance your natural beauty with dermal fillers?
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