import { motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles, Gem, Users } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero Section with Parallax */}
      <div className="relative h-[80vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative h-full flex items-center">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <h1 className="font-serif text-5xl md:text-7xl text-white font-medium mb-6">
                Our Story
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Where artistry meets expertise in aesthetic medicine, creating a sanctuary for those seeking natural beauty enhancement
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-gradient-to-b from-primary/20 to-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-medium mb-8">The Meaning of Carma</h2>
              <div className="relative">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-3" />
                <div className="relative bg-white p-8 rounded-3xl shadow-lg">
                  <p className="text-2xl italic text-neutral-600 mb-4">
                    kar·ma /ˈkärmə/
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    A characteristic emanation, aura, or spirit that infuses or vitalizes someone or something
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-3" />
              <div className="relative h-full rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3764573/pexels-photo-3764573.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Aesthetic Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-8"
          >
            <h2 className="font-serif text-4xl font-medium mb-4">Our Core Values</h2>
            <p className="text-lg text-neutral-600">
              Guided by principles that prioritize your safety, satisfaction, and natural beauty
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Expert Care",
                description: "Extensive training in aesthetic medicine and plastic surgery, dedicated to your safety and satisfaction"
              },
              {
                icon: Sparkles,
                title: "Natural Results",
                description: "Enhancing your features while maintaining facial harmony and natural beauty"
              },
              {
                icon: Gem,
                title: "Premium Quality",
                description: "Using only the highest quality products and advanced techniques for optimal results"
              },
              {
                icon: Users,
                title: "Personalized Approach",
                description: "Tailored treatments that address your specific goals and concerns"
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: index % 2 === 0 ? -20 : 20 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-2 group-hover:rotate-0 transition-transform" />
                  <div className="relative h-full bg-white p-8 rounded-3xl shadow-lg group-hover:shadow-xl transition-all">
                    <div className="bg-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-medium mb-4">{value.title}</h3>
                    <p className="text-neutral-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-1" />
              <div className="relative bg-white rounded-3xl shadow-xl p-12">
                <h2 className="font-serif text-4xl font-medium mb-8 text-center">Our Philosophy</h2>
                <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
                  <p>
                    A modern and creative medical spa for aesthetic treatments and cosmetic injectables. At Carma, we understand that beauty is not one-size-fits-all and every patient deserves an experience that is tailored to your individual needs and goals. We aim to bring out your most confident self by enhancing your natural beauty and creating a personalized experience to achieve your aesthetic goals.
                  </p>
                  <p>
                    Whether you're seeking full facial rejuvenation, wrinkle reduction, lip enhancements, or simply want to know more about injectables, we offer a comprehensive range of services. At Carma, we value our relationship with each and every client and are humbled to be a part of your aesthetic journey. From the initial consultation to any treatments we decide on, all decisions are made together with your goals in mind.
                  </p>
                  <p>
                    We are dedicated to providing accessible and affordable aesthetic solutions because everyone deserves to indulge in self-care. Our goal is for every client to look and feel their best which is why our mission is to bring artistry and science together to create stunning results!
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mt-16"
            >
              <p className="text-xl font-medium text-neutral-900 mb-8">
                Ready to begin your aesthetic journey?
              </p>
              <a 
                href="https://carmaaesthetics.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-white bg-accent hover:bg-accent-dark rounded-xl transition-colors duration-200 group"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}