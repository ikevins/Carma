import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PRPPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center text-white"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">PRP Treatment</h1>
          <p className="text-xl max-w-3xl mx-auto">Harness your body's natural healing power</p>
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
              <h2 className="font-serif text-3xl font-medium mb-6">Natural Regeneration</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Platelet-Rich Plasma (PRP) therapy uses your body's own healing mechanisms to rejuvenate skin and stimulate hair growth. By concentrating the platelets and growth factors from your blood, we create a powerful regenerative treatment that can be used alone or to enhance other procedures.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This advanced treatment is completely natural and safe, as it uses your own blood components to stimulate collagen production, improve skin texture, and promote healing.
              </p>
            </motion.div>

            {/* Applications */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Skin Rejuvenation</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Improves skin texture and tone</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Reduces fine lines and wrinkles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Minimizes acne scarring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Enhances overall skin health</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-medium mb-6">Hair Restoration</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Stimulates inactive hair follicles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Increases hair thickness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Promotes natural hair growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span className="text-neutral-600">Strengthens existing hair</span>
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
              <h3 className="font-serif text-2xl font-medium mb-6">The PRP Process</h3>
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">1. Blood Collection</h4>
                  <p className="text-neutral-600">A small amount of blood is drawn and processed to concentrate the platelets.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">2. Preparation</h4>
                  <p className="text-neutral-600">Your blood is processed in a centrifuge to separate and concentrate the platelet-rich plasma.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">3. Treatment</h4>
                  <p className="text-neutral-600">The PRP is carefully applied or injected into the treatment areas for optimal results.</p>
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
                Experience the regenerative power of PRP therapy
              </p>
              <a 
                href="https://carmaaesthetics.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounde

d-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
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