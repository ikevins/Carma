import { BookOpen, FileText, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../ui/Section';

const beforeAfterGallery = [
  {
    id: 1,
    title: 'Lip Enhancement',
    description: 'Natural lip augmentation with dermal fillers',
    before: 'https://images.pexels.com/photos/3764574/pexels-photo-3764574.jpeg',
    after: 'https://images.pexels.com/photos/3764573/pexels-photo-3764573.jpeg',
    treatment: 'Dermal Fillers'
  },
  {
    id: 2,
    title: 'Forehead Lines',
    description: 'Smoothed forehead lines with neurotoxin treatment',
    before: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg',
    after: 'https://images.pexels.com/photos/3764010/pexels-photo-3764010.jpeg',
    treatment: 'Wrinkle Relaxers'
  }
];

export default function Resources() {
  return (
    <Section 
      id="resources" 
      title="Resources"
      subtitle="Educational materials and care instructions for our treatments."
      background="light"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {/* Care Instructions */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-2xl font-medium mb-6">Treatment Care Instructions</h2>
            <div className="grid gap-6">
              <Link 
                to="/resources/dermal-fillers-care"
                className="bg-neutral-50 p-6 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">Dermal Fillers Care Guide</h3>
                    <p className="text-neutral-600">Pre and post-treatment instructions for optimal results</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent" />
                </div>
              </Link>

              <Link 
                to="/resources/mesoneedling-care"
                className="bg-neutral-50 p-6 rounded-xl hover:bg-neutral-100 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium mb-2">Mesoneedling Care Guide</h3>
                    <p className="text-neutral-600">Complete preparation and aftercare instructions</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-accent" />
                </div>
              </Link>
            </div>
          </div>

          {/* Before & After Gallery */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="font-serif text-2xl font-medium mb-8">Before & After Gallery</h2>
            <div className="grid grid-cols-1 gap-12">
              {beforeAfterGallery.map((item) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="relative grid grid-cols-2 gap-8">
                    {/* Before Image */}
                    <div className="space-y-2">
                      <div className="relative aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={item.before} 
                          alt={`Before ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-white text-sm font-medium">
                          Before
                        </div>
                      </div>
                    </div>

                    {/* After Image */}
                    <div className="space-y-2">
                      <div className="relative aspect-w-4 aspect-h-5 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={item.after} 
                          alt={`After ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-accent/90 px-3 py-1 rounded text-white text-sm font-medium">
                          After
                        </div>
                      </div>
                    </div>

                    {/* Treatment Details */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-neutral-50 px-6 py-3 rounded-full shadow-md">
                      <p className="text-sm font-medium text-neutral-600">{item.treatment}</p>
                    </div>
                  </div>

                  <div className="text-center pt-8">
                    <h3 className="font-serif text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}