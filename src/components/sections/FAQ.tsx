import { useState } from 'react';
import Section from '../ui/Section';
import FAQItem from '../ui/FAQItem';
import { faqs } from '../../data/faqs';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('general');

  const categories = [
    { id: 'general', name: 'General' },
    { id: 'mesoneedling', name: 'Mesoneedling' },
    { id: 'wrinkle-relaxers', name: 'Wrinkle Relaxers' },
    { id: 'dermal-fillers', name: 'Dermal Fillers' },
    { id: 'prp', name: 'PRP' }
  ];

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  return (
    <Section 
      id="faqs" 
      title="Frequently Asked Questions"
      subtitle="Find detailed answers to common questions about our treatments and procedures"
      background="light"
    >
      <div className="max-w-3xl mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid gap-6">
            {filteredFaqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-neutral-700 mb-6">
            Have a question that's not answered here?
          </p>
          <a 
            href="https://carmaaesthetics.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </Section>
  );
}