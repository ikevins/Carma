import { motion } from 'framer-motion';
import { AlertTriangle, Clock, CheckCircle2, XCircle, Info } from 'lucide-react';
import PageLayout from '../../components/layout/PageLayout';

export default function DermalFillersCare() {
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
              <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">Dermal Fillers Care Guide</h1>
              <p className="text-lg text-neutral-600 mb-12">Complete pre and post-treatment instructions for optimal results</p>
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
                  <div className="w-32 shrink-0 font-medium text-accent">4 Weeks Before</div>
                  <div className="text-neutral-600">Schedule appointment before any major events</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 shrink-0 font-medium text-accent">7 Days Before</div>
                  <div className="text-neutral-600">Stop blood-thinning medications and supplements (with doctor's approval)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 shrink-0 font-medium text-accent">24 Hours Before</div>
                  <div className="text-neutral-600">Avoid alcohol consumption</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 shrink-0 font-medium text-accent">First 24 Hours</div>
                  <div className="text-neutral-600">Apply ice, avoid makeup, and sleep on your back</div>
                </div>
                <div className="flex items-start">
                  <div className="w-32 shrink-0 font-medium text-accent">2 Weeks After</div>
                  <div className="text-neutral-600">Schedule follow-up appointment</div>
                </div>
              </div>
            </motion.div>

            {/* Important Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <Info className="h-6 w-6 text-accent mr-3" />
                <h2 className="font-serif text-2xl font-medium">Important Notifications</h2>
              </div>
              <p className="text-neutral-600 mb-4">Notify your provider if you have any of the following:</p>
              <div className="grid gap-3">
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Recent infection, cold, virus, or flu (within 30 days)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">History of cold sores</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Recent or upcoming dental procedures (within 30 days)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Recent or upcoming surgery</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Recent or upcoming immunizations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Recent tattooing or permanent makeup</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Use of immunosuppressive medications</span>
                </div>
                <div className="flex items-start">
                  <span className="text-accent mr-3">•</span>
                  <span className="text-neutral-600">Pregnancy, trying to conceive, or breastfeeding</span>
                </div>
              </div>
            </motion.div>

            {/* Pre-Treatment Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-success mr-3" />
                <h2 className="font-serif text-2xl font-medium">Pre-Treatment Instructions</h2>
              </div>
              <p className="text-neutral-600 mb-4">Stop the following 7 days before treatment (with doctor's approval):</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Aspirin</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">NSAIDS (Ibuprofen, Naproxen)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Vitamin E</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Fish oil</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">St. John's Wort</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Vitamin D</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Blood thinners</span>
                </div>
              </div>
            </motion.div>

            {/* Post-Treatment Care */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg mb-8"
            >
              <div className="flex items-center mb-6">
                <CheckCircle2 className="h-6 w-6 text-success mr-3" />
                <h2 className="font-serif text-2xl font-medium">Post-Treatment Care</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Apply ice packs (10-15 minutes on/off) for the first 24 hours</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Take Tylenol for discomfort (max 4000mg/24hrs)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Sleep on your back for the first night</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Wait 24 hours before applying makeup</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">For lip filler: avoid lipstick and straws for 24 hours</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Resume skincare routine the next day</span>
                </div>
                <div className="flex items-start">
                  <span className="text-success mr-3">•</span>
                  <span className="text-neutral-600">Avoid facials, peels, and other procedures for 2 weeks</span>
                </div>
              </div>
            </motion.div>

            {/* Warning Signs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-error/10 p-8 rounded-2xl border border-error/20"
            >
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-6 w-6 text-error mr-3" />
                <h2 className="font-serif text-2xl font-medium text-error">Call (689) 307-7000 Immediately If You Experience:</h2>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Dusky or white discoloration, mottled skin, or unusual bruising</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Severe or increasing pain and redness</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Changes in vision or blurred vision</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Severe swelling, itching, or blisters</span>
                </div>
                <div className="flex items-start">
                  <span className="text-error mr-3">•</span>
                  <span className="text-neutral-700">Difficulty swallowing or smiling</span>
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