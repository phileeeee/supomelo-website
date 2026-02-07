'use client';

import { motion } from 'framer-motion';

const journeyStages = [
  { stage: 'Seed', description: 'Finding product-market fit' },
  { stage: 'Series A', description: 'Scaling what works' },
  { stage: 'Growth', description: 'Accelerating your roadmap' },
];

const clientTypes = [
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Raised $2-20m',
    description: 'You need product managers & product designers to supercharge iterating as quickly as possible to get to product market fit.',
    offerings: [
      { title: 'Mind meld', desc: 'Structured onboarding to understand your product, industry, and users.' },
      { title: 'Weekly jam', desc: 'Weekly sessions to go through design feedback and brief new projects.' },
      { title: 'Brainstorming', desc: 'Regular Slack huddles and ad-hoc calls to get the context we need.' },
      { title: 'Rapid prototypes', desc: 'Validate product decisions with customers before building.' },
    ],
  },
  {
    id: 'scaleups',
    title: 'Scale-ups',
    subtitle: 'Raised $50m+',
    description: 'You need a senior product designer in your triad to accelerate your roadmap.',
    offerings: [
      { title: 'Embedded rituals', desc: 'We join your standups, design critiques, and team ceremonies.' },
      { title: 'Design systems', desc: 'Scalable systems so your engineering team ships on brand.' },
      { title: 'High-fidelity', desc: 'End-to-end annotated flows for easy engineer hand-off.' },
      { title: 'User research', desc: 'Deep user interviews and testing to inform product direction.' },
    ],
  },
];

export default function Statement() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="py-24 lg:py-40 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="block text-4xl md:text-5xl lg:text-[56px] font-bold text-text-primary leading-tight"
          >
            Hiring takes months.
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="block text-4xl md:text-5xl lg:text-[56px] font-bold text-text-primary leading-tight"
          >
            We start Monday.
          </motion.span>
        </div>

        {/* Comparison bars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-text-muted w-32 shrink-0">WITH SUPOMELO</span>
            <div className="flex gap-2 flex-1 overflow-hidden">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-[3] whitespace-nowrap overflow-hidden"
              >
                DESIGN
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-[2] whitespace-nowrap overflow-hidden"
              >
                TEST
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-1 whitespace-nowrap overflow-hidden"
              >
                LAUNCH
              </motion.div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-text-muted w-32 shrink-0">IN-HOUSE</span>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 3, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex-1 border-2 border-border-light text-text-muted px-4 py-2 rounded text-sm font-medium overflow-hidden whitespace-nowrap flex items-center gap-2"
            >
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Hiring in progress...
              </span>
              <span className="ml-auto">Don't wait!</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-text-muted uppercase tracking-wide mb-6"
          >
            We grow with you
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {journeyStages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-6 border-l-2 border-border-light"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                  className="absolute left-[-9px] top-0 w-4 h-4 bg-bg-dark rounded-full"
                />
                <h3 className="text-2xl font-bold text-text-primary mb-1">{item.stage}</h3>
                <p className="text-text-muted">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Client Type Accordion - Accent Background */}
      <div className="bg-accent mt-20 py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-bg-dark/60 uppercase tracking-wide mb-6"
          >
            What you get
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clientTypes.map((client) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="bg-bg-warm border-2 border-bg-dark/10 rounded-2xl overflow-hidden p-6"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-text-primary">{client.title}</h3>
                  <p className="text-text-muted">{client.subtitle}</p>
                </div>
                <p className="text-text-primary mb-6">{client.description}</p>
                <div className="grid grid-cols-1 gap-3">
                  {client.offerings.map((offering, index) => (
                    <div key={index} className="bg-border-light rounded-xl p-4">
                      <h4 className="font-semibold text-text-primary mb-1">{offering.title}</h4>
                      <p className="text-sm text-text-muted">{offering.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
