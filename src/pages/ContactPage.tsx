import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="min-h-screen bg-gradient-to-b from-primary/20 to-white">
        {/* Hero Section */}
        <div className="container py-16 md:py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">Let's Connect</h1>
            <p className="text-xl text-neutral-600">
              Your journey to enhanced beauty and confidence begins with a conversation
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Interested In
                    </label>
                    <select
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="mesoneedling">Mesoneedling</option>
                      <option value="wrinkle-relaxers">Wrinkle Relaxers</option>
                      <option value="dermal-fillers">Dermal Fillers</option>
                      <option value="prp">PRP</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-4 rounded-lg transition-colors duration-200 flex items-center justify-center group"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:sticky lg:top-24 space-y-8"
            >
              {/* Map */}
              <div className="relative">
                <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-3"></div>
                <div className="relative rounded-3xl overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121393!2d-81.59344492392385!3d28.50581097583946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e781c173f8995f%3A0x5fd59b92b3c79bae!2s14015%20W%20Colonial%20Dr%2C%20Winter%20Garden%2C%20FL%2034787%2C%20USA!5e0!3m2!1sen!2sca!4v1658259845253!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Carma Aesthetics Location"
                  ></iframe>
                </div>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                      <p className="text-neutral-600">
                        14015 West Colonial Dr Suite 23,<br />
                        Winter Garden, FL 34787
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Hours</h3>
                      <div className="text-neutral-600">
                        <p className="mb-1">Monday — Friday: 10 am — 5 pm</p>
                        <p>Saturday — Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Call Us</h3>
                      <a 
                        href="tel:+16893077000" 
                        className="text-neutral-600 hover:text-accent transition-colors"
                      >
                        (689) 307-7000
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-lg mb-1">Email Us</h3>
                      <a 
                        href="mailto:info@carmaaesthetics.com" 
                        className="text-neutral-600 hover:text-accent transition-colors"
                      >
                        info@carmaaesthetics.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book Now CTA */}
              <div className="bg-accent/10 rounded-2xl p-8 text-center">
                <h3 className="font-serif text-2xl font-medium mb-4">Ready to Book?</h3>
                <p className="text-neutral-600 mb-6">
                  Schedule your appointment online and start your journey to enhanced beauty
                </p>
                <a
                  href="https://carmaaesthetics.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-dark text-white rounded-xl transition-colors duration-200 group"
                >
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}