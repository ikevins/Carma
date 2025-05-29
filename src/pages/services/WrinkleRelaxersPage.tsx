import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const treatments = [
  {
    name: 'Forehead Lines',
    units: '5-30 units',
    image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg'
  },
  {
    name: 'Elevens',
    units: '20-40 units',
    image: 'https://images.pexels.com/photos/3764574/pexels-photo-3764574.jpeg'
  },
  {
    name: 'Brow Lift',
    units: '4-8 units',
    image: 'https://images.pexels.com/photos/3764319/pexels-photo-3764319.jpeg'
  },
  {
    name: "Crow's Feet",
    units: '10-15 units',
    image: 'https://images.pexels.com/photos/3764375/pexels-photo-3764375.jpeg'
  },
  {
    name: 'Bunny Lines',
    units: '4-6 units',
    image: 'https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg'
  },
  {
    name: 'Gummy Smile',
    units: '4-6 units',
    image: 'https://images.pexels.com/photos/3764012/pexels-photo-3764012.jpeg'
  },
  {
    name: 'Lip Flip/Lip Lines',
    units: '5-8 units',
    image: 'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg'
  },
  {
    name: 'Marionette (DAO)',
    units: 'up to 10 units',
    image: 'https://images.pexels.com/photos/3764015/pexels-photo-3764015.jpeg'
  },
  {
    name: 'Chin Dimpling',
    units: '5-10 units',
    image: 'https://images.pexels.com/photos/3764016/pexels-photo-3764016.jpeg'
  },
  {
    name: 'Masseter (TMJ)',
    units: 'up to 60 units',
    image: 'https://images.pexels.com/photos/3764017/pexels-photo-3764017.jpeg'
  },
  {
    name: 'Platysmal Bands (Neck)',
    units: 'up to 40 units',
    image: 'https://images.pexels.com/photos/3764018/pexels-photo-3764018.jpeg'
  },
  {
    name: 'Other',
    description: "Unsure of what you need? Book a consultation and let's discuss!",
    image: 'https://images.pexels.com/photos/3764019/pexels-photo-3764019.jpeg'
  }
];

export default function WrinkleRelaxersPage() {
  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images.pexels.com/photos/3997390/pexels-photo-3997390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`
      }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container text-center text-white"
        >
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Wrinkle Relaxers</h1>
          <p className="text-xl max-w-3xl mx-auto">Achieve natural-looking results with premium neurotoxin treatments</p>
        </motion.div>
      </div>

      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Overview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <h2 className="font-serif text-3xl font-medium mb-6">Refresh Your Appearance</h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Our wrinkle relaxer treatments use FDA-approved neurotoxins like Botox®, Daxxify®, and Xeomin® to temporarily reduce muscle activity that causes expression lines and wrinkles. Each product has unique benefits, allowing us to customize your treatment for optimal results.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Whether you're looking to soften existing lines or prevent new ones from forming, our expert injectors will create a personalized treatment plan to help you achieve your aesthetic goals while maintaining natural facial expressions.
              </p>
            </motion.div>

            {/* Treatment Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-serif text-3xl font-medium mb-8 text-center">Popular Treatments</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {treatments.map((treatment, index) => (
                  <motion.div
                    key={treatment.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={treatment.image} 
                        alt={treatment.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-medium mb-2">{treatment.name}</h3>
                      {treatment.units ? (
                        <p className="text-neutral-600 mb-4">{treatment.units}</p>
                      ) : (
                        <p className="text-neutral-600 mb-4">{treatment.description}</p>
                      )}
                      <a 
                        href="https://carmaaesthetics.janeapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-accent hover:text-accent-dark transition-colors group/link"
                      >
                        Book now
                        <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>
                ))}
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
              <h3 className="font-serif text-2xl font-medium mb-6">What to Expect</h3>
              <div className="grid gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-2">The Treatment</h4>
                  <p className="text-neutral-600">Quick and comfortable injections performed with precision, typically taking 15-30 minutes.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Results Timeline</h4>
                  <p className="text-neutral-600">Initial results visible within 3-5 days, with full effects developing over 10-14 days.</p>
                </div>
                <div>
                  <h4 className="font-medium text-lg mb-2">Duration</h4>
                  <p className="text-neutral-600">Results typically last 3-4 months, with regular maintenance treatments recommended.</p>
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
                Ready to smooth away those wrinkles? Book your consultation today!
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