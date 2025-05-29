import Section from '../ui/Section';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <Section 
      id="about" 
      title="About Us"
      subtitle="Where science meets art in aesthetic medicine"
    >
      {/* Hero Image and Karma Definition */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.pexels.com/photos/3764014/pexels-photo-3764014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Carma Aesthetics Spa Interior" 
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute w-full h-full bg-accent/10 rounded-2xl -z-0 -bottom-8 -right-8"></div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-8">
          <div className="bg-primary/20 p-10 rounded-2xl">
            <h3 className="font-serif text-3xl font-medium mb-4 text-neutral-900">The Meaning of Carma</h3>
            <p className="text-xl text-neutral-600 italic mb-3">
              kar·ma kär-ma
            </p>
            <p className="text-lg text-neutral-600">
              A characteristic emanation, aura, or spirit that infuses or vitalizes someone or something
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
            <h4 className="font-serif text-3xl font-medium text-accent">01</h4>
          </div>
          <h4 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Expert Care</h4>
          <p className="text-neutral-600 leading-relaxed">
            Our staff has extensive training in aesthetic medicine/plastic surgery and are dedicated to your safety and satisfaction.
          </p>
        </div>
        
        <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
            <h4 className="font-serif text-3xl font-medium text-accent">02</h4>
          </div>
          <h4 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Customized Treatments</h4>
          <p className="text-neutral-600 leading-relaxed">
            We understand that every client is unique. Our personalized approach ensures that we tailor treatments to address your specific goals and concerns.
          </p>
        </div>
        
        <div className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
          <div className="h-20 w-20 bg-primary/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
            <h4 className="font-serif text-3xl font-medium text-accent">03</h4>
          </div>
          <h4 className="font-serif text-2xl font-medium mb-4 text-neutral-900">Luxurious Experience</h4>
          <p className="text-neutral-600 leading-relaxed">
            Enjoy a luxurious and comfortable environment designed to make your visit as relaxing as it is transformative.
          </p>
        </div>
      </div>

      {/* Mission and Values */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-12 mb-16">
          <h3 className="font-serif text-3xl font-medium mb-8 text-center text-neutral-900">Our Philosophy</h3>
          <div className="space-y-6 text-neutral-600 leading-relaxed">
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

        <div className="text-center">
          <p className="text-xl font-medium text-neutral-900 mb-8">
            Contact us today to schedule a consultation and begin your aesthetic journey!
          </p>
          <a 
            href="https://carmaaesthetics.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
          >
            Book Appointment
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
}