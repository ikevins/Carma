import { motion } from 'framer-motion';
import { AlertTriangle, Clock, CheckCircle2, XCircle } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';

export default function MesoneedlingCare() {
  return (
    <PageLayout>
      <div className="py-16 md:py-24 bg-neutral-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Mesoneedling Care Guide</h1>
              <p className="text-lg text-neutral-600 mb-12">Essential instructions for optimal results and recovery</p>
            </motion.div>

            {/* Timeline Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <Clock className="h-6 w-6 text-accent mr-3" />
                <h2 className="font-serif text-2xl font-medium">Treatment Timeline</h2>
              </div>
              <div className="grid gap-6">
                <div className="flex items-start">
                  <div className="w-24 shrink-0 font-medium text-accent">5 Days Before</div>
                  <div className="text-neutral-600">Stop using retinoids/retinol and other active ingredients</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 shrink-0 font-medium text-accent">Day Of</div>
                  <div className="text-neutral-600">Arrive with clean, makeup-free skin</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 shrink-0 font-medium text-accent">24 Hours</div>
                  <div className="text-neutral-600">Avoid makeup, sweating, and direct sun exposure</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 shrink-0 font-medium text-accent">5 Days After</div>
                  <div className="text-neutral-600">Continue avoiding active ingredients and harsh exfoliants</div>
                </div>
                <div className="flex items-start">
                  <div className="w-24 shrink-0 font-medium text-accent">2-3 Weeks</div>
                  <div className="text-neutral-600">Schedule your next treatment session</div>
                </div>
              </div>
            </motion.div>

            {/* Do's */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-success mr-3" />
                <h2 className="font-serif text-2xl font-medium">Essential Care Instructions</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Gently cleanse with cool or lukewarm water and a mild cleanser twice daily</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Apply recommended post-procedure products or gentle moisturizer</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Use broad-spectrum SPF 30+ sunscreen daily</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Pat skin dry gently - never rub</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">If peeling occurs, apply Aquaphor or post-procedure kit from our office</span>
                </div>
              </div>
            </motion.div>

            {/* Don'ts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <XCircle className="h-6 w-6 text-error mr-3" />
                <h2 className="font-serif text-2xl font-medium">Things to Avoid</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-600">Do not use exfoliating products, scrubs, or brushes</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-600">Avoid retinoids, salicylic acid, glycolic acid, and other active ingredients</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-600">Do not pick, scratch, or extract any breakouts that may occur</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-600">Avoid direct sun exposure and tanning</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-600">No strenuous exercise or activities that cause excessive sweating for 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Warning Signs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-error/10 p-8 rounded-2xl border border-error/20"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-error mr-3" />
                <h2 className="font-serif text-2xl font-medium text-error">Contact Us Immediately</h2>
              </div>
              <p className="text-neutral-800 mb-4">Call our office at (689) 307-7000 if you experience any of these symptoms:</p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Signs of infection (pus, severe redness, warmth)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Increasing pain or tenderness</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Severe swelling</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Fever or chills</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}