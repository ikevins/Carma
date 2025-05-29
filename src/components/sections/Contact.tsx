import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will contact you shortly!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <Section 
      id="contact" 
      title="Contact Us"
      subtitle="We'd love to hear from you. Reach out to schedule a consultation or ask any questions."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="font-serif text-2xl font-medium mb-6 text-neutral-900">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1">
                  Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
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
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" variant="accent" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="font-serif text-2xl font-medium mb-6 text-neutral-900">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121393!2d-81.59344492392385!3d28.50581097583946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e781c173f8995f%3A0x5fd59b92b3c79bae!2s14015%20W%20Colonial%20Dr%2C%20Winter%20Garden%2C%20FL%2034787%2C%20USA!5e0!3m2!1sen!2sca!4v1658259845253!5m2!1sen!2sca" 
                width="100%" 
                height="250" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Carma Aesthetics Location"
              ></iframe>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-accent shrink-0 mt-1" />
                <span>14015 West Colonial Dr Suite 23, Winter Garden, FL 34787</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-accent shrink-0" />
                <a href="tel:+16893077000" className="hover:text-accent transition-colors">(689) 307-7000</a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-accent shrink-0" />
                <a href="mailto:info@carmaaesthetics.com" className="hover:text-accent transition-colors">
                  info@carmaaesthetics.com
                </a>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-accent shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Monday — Friday</p>
                  <p className="text-neutral-600">10 am — 5 pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-primary/20 rounded-lg p-6 border border-primary">
            <h3 className="font-serif text-xl font-medium mb-3 text-neutral-900">Book a Consultation</h3>
            <p className="text-neutral-700 mb-4">
              Ready to start your aesthetic journey? Schedule your personalized consultation today.
            </p>
            <a 
              href="https://carmaaesthetics.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}