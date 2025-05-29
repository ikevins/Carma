import { useParams } from 'react-router-dom';
import { services } from '../data/services';
import Section from '../components/ui/Section';
import { ArrowRight } from 'lucide-react';

export default function ServicePage() {
  const { serviceSlug } = useParams();
  const service = services.find(s => s.slug === serviceSlug);

  if (!service) {
    return (
      <Section id="not-found" title="Service Not Found">
        <p>The requested service could not be found.</p>
      </Section>
    );
  }

  const serviceContent = {
    'mesoneedling': {
      intro: "Transform your skin with mesoneedling, the ultimate treatment for hydration, rejuvenation, and a youthful glow. Combining the precision of microneedling with the benefits of custom serums and nutrients, mesoneedling works to restore your skin's vitality from the inside out.",
      description: {
        title: "What is Mesoneedling?",
        content: [
          "Mesoneedling is an advanced skincare treatment that combines the benefits of microneedling with the infusion of highly effective serums tailored to your skin's needs. This cutting-edge technique creates tiny microchannels in the skin's surface, allowing for deep penetration of nourishing active ingredients. These microchannels stimulate the skin's natural repair process, encouraging collagen and elastin production while delivering targeted nutrients directly to the dermis.",
          "Unlike traditional microneedling, mesoneedling incorporates a specialized mesotherapy solution during the treatment. This solution often contains a blend of vitamins, peptides, antioxidants, hyaluronic acid, and other rejuvenating compounds. These ingredients work synergistically to hydrate, repair, and enhance the skin from within, providing more profound and longer-lasting results than surface-level treatments."
        ]
      },
      benefits: [
        'Minimal Downtime: Quick recovery with noticeable results',
        'Deep Hydration: Infuses skin with hyaluronic acid and other nutrients',
        'Collagen Boost: Encourages natural collagen production for firmer skin',
        'Improved Texture: Reduces the appearance of fine lines, wrinkles, and acne scars',
        'Even Skin Tone: Fades pigmentation and promotes a radiant, healthy glow'
      ],
      idealFor: [
        'Dry, dull skin',
        'Fine lines and wrinkles',
        'Uneven skin tone or texture',
        'Acne scars',
        'Signs of aging'
      ],
      faqs: [
        {
          q: "How is Mesoneedling different from Microneedling?",
          a: "While both treatments use tiny needles to create micro-injuries in the skin to stimulate collagen, Mesoneedling does not create direct trauma to the blood vessels (therefore no bleeding is involved) and goes a step further by infusing active ingredients during the treatment. This makes it more effective for addressing specific concerns like hydration, pigmentation, and fine lines."
        },
        {
          q: "What skin concerns can Mesoneedling treat?",
          a: "Mesoneedling can help improve fine lines and wrinkles, uneven skin tone, sun damage and pigmentation, acne scars, dull or dehydrated skin, enlarged pores and skin laxity."
        },
        {
          q: "Does the treatment hurt?",
          a: "Most patients find Mesoneedling tolerable. We offer the option of topical numbing cream which is applied before the procedure to ensure the treatment is as comfortable as possible."
        },
        {
          q: "When will I see results?",
          a: "Results vary, but many clients notice an improvement in their skin's radiance and texture within a few days. Full results, including enhanced collagen production, typically become more apparent after 4-6 weeks."
        },
        {
          q: "How many treatments will I need?",
          a: "For optimal results, a series of 3-6 treatments spaced 2-3 weeks apart is recommended. Your provider will design a personalized plan based on your skin goals."
        },
        {
          q: "Is there any downtime?",
          a: "Mesoneedling has minimal downtime. You may experience mild redness and sensitivity for 1-2 days post-treatment, similar to a mild sunburn. Proper aftercare, including sunscreen and gentle skincare, is essential."
        }
      ],
      aftercare: [
        'Avoid applying makeup for at least 24 hours',
        'Use gentle, hydrating skincare products',
        'Avoid sun exposure and wear broad-spectrum sunscreen daily',
        'Refrain from using retinols, AHAs, or other active ingredients for 3-5 days'
      ]
    },
    'wrinkle-relaxers': {
      benefits: [
        'Reduces appearance of fine lines and wrinkles',
        'Prevents formation of new wrinkles',
        'Quick treatment with minimal downtime',
        'Natural-looking results',
        'FDA-approved and safe'
      ],
      process: 'Small amounts of botulinum toxin are precisely injected into targeted facial muscles, temporarily reducing muscle activity that causes wrinkles.',
      recovery: 'No downtime required. Results begin to appear within 3-7 days, with full results visible after 2 weeks.',
      results: 'Results typically last 3-4 months, with longer-lasting effects possible with regular treatments.'
    },
    'dermal-fillers': {
      benefits: [
        'Instantly restores volume loss',
        'Enhances facial contours',
        'Smooths deep lines and wrinkles',
        'Natural-looking results',
        'Immediate results'
      ],
      process: 'Hyaluronic acid-based fillers are strategically injected to restore volume, enhance features, or smooth wrinkles. We use premium FDA-approved fillers.',
      recovery: 'Minimal downtime. Some swelling and bruising possible for 3-7 days.',
      results: 'Immediate results that can last 6-18 months depending on the type of filler and treatment area.'
    },
    'prp': {
      benefits: [
        'Uses your body\'s natural healing factors',
        'Stimulates collagen production',
        'Improves skin texture and tone',
        'Natural and safe procedure',
        'Can be combined with other treatments'
      ],
      process: 'A small amount of blood is drawn and processed to concentrate the platelets. The resulting PRP is then applied or injected into the treatment area.',
      recovery: 'Minimal downtime of 24-48 hours. Some redness and sensitivity is normal.',
      results: 'Gradual improvement over 4-6 weeks, with optimal results after a series of treatments.'
    }
  };

  const content = serviceContent[service.slug as keyof typeof serviceContent];

  if (service.slug === 'mesoneedling') {
    return (
      <>
        <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${service.imageUrl})`
        }}>
          <div className="container text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">{service.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">{content.intro}</p>
          </div>
        </div>

        <Section id="mesoneedling-info" background="light">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-12">
              {/* What is Mesoneedling */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-serif text-3xl font-medium mb-6">{content.description.title}</h2>
                {content.description.content.map((paragraph, index) => (
                  <p key={index} className="text-neutral-600 mb-4 leading-relaxed">{paragraph}</p>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-serif text-2xl font-medium mb-6">Benefits of Mesoneedling</h2>
                <ul className="grid gap-4">
                  {content.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="text-neutral-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who is it for */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-serif text-2xl font-medium mb-6">Who is Mesoneedling For?</h2>
                <p className="text-neutral-600 mb-4">Mesoneedling is ideal for anyone looking to address:</p>
                <ul className="grid gap-3">
                  {content.idealFor.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQs */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-serif text-2xl font-medium mb-6">Mesoneedling FAQ: Everything You Need to Know</h2>
                <div className="grid gap-6">
                  {content.faqs.map((faq, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-lg mb-2">{faq.q}</h3>
                      <p className="text-neutral-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Aftercare */}
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="font-serif text-2xl font-medium mb-6">What aftercare is required?</h2>
                <p className="text-neutral-600 mb-4">After your mesoneedling treatment:</p>
                <ul className="grid gap-3">
                  {content.aftercare.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3">•</span>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-lg text-neutral-700 mb-6">
                  Still have questions? Contact Carma Aesthetics to schedule a consultation and discover why this innovative treatment is a favorite among those seeking lasting, visible results.
                </p>
                <a 
                  href="https://carmaaesthetics.janeapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center bg-cover bg-center" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${service.imageUrl})`
      }}>
        <div className="container text-center text-white">
          <h1 className="font-serif text-5xl md:text-6xl font-medium mb-6">{service.title}</h1>
          <p className="text-xl max-w-3xl mx-auto">{service.description}</p>
        </div>
      </div>

      <Section id="service-details" background="light">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="font-serif text-2xl font-medium mb-6">Benefits</h2>
              <ul className="grid gap-3">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent mr-3">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-serif text-xl font-medium mb-4">The Process</h3>
                <p className="text-neutral-600">{content.process}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-serif text-xl font-medium mb-4">Recovery</h3>
                <p className="text-neutral-600">{content.recovery}</p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="font-serif text-xl font-medium mb-4">Results</h3>
                <p className="text-neutral-600">{content.results}</p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://carmaaesthetics.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-accent hover:bg-accent-dark rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent group"
              >
                Book Your Treatment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}