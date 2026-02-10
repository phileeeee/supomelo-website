'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const journeyStages = [
  { stage: 'Seed', description: 'Finding product-market fit' },
  { stage: 'Series A', description: 'Scaling what works' },
  { stage: 'Growth', description: 'Accelerating your roadmap' },
];

const clientTypes = [
  {
    id: 'scaleups',
    title: 'Scale-ups',
    subtitle: 'Raised $50m+',
    description: 'A senior design partner embedded in your team to accelerate your roadmap.',
    offerings: [
      { title: 'Embedded collaboration', desc: 'We join your standups, critiques, and syncs. Part of your team, not outside it.' },
      { title: 'Wireframes & prototypes', desc: 'Whatever fidelity gets you answers fastest, from quick sketches to interactive prototypes.' },
      { title: 'UI design', desc: 'Production-ready screens your engineers can ship.' },
      { title: 'Design systems', desc: 'Components and patterns that scale with your product. Built as needed, not upfront.' },
      { title: 'Research support', desc: 'We join sessions, synthesize findings, or run lightweight tests. Whatever helps us learn.' },
    ],
  },
  {
    id: 'startups',
    title: 'Startups',
    subtitle: 'Raised $2-20m',
    description: 'Design support to help you move fast and learn faster.',
    offerings: [
      { title: 'Weekly syncs', desc: 'Regular check-ins to review progress, gather feedback, and plan next steps.' },
      { title: 'Rapid prototypes', desc: 'Testable concepts in days. Validate assumptions before engineering commits.' },
      { title: 'UI design', desc: 'Polished screens ready for development.' },
      { title: 'Lightweight systems', desc: 'Just enough structure to stay consistent without slowing you down.' },
      { title: 'Research & testing', desc: 'Quick validation loops with real users, not month-long studies.' },
    ],
  },
];

export default function Statement() {
  const [activeTab, setActiveTab] = useState(0);

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
          className="mb-20 space-y-6"
        >
          {/* With Supomelo */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-text-muted block">WITH SUPOMELO</span>
            <div className="flex gap-2">
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-[2] md:flex-[3] whitespace-nowrap overflow-hidden"
              >
                DESIGN
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-[1.5] md:flex-[2] whitespace-nowrap overflow-hidden"
              >
                TEST
              </motion.div>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                whileInView={{ width: 'auto', opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="bg-bg-dark text-text-light px-4 py-2 rounded text-sm font-medium flex-[1.3] md:flex-1 whitespace-nowrap overflow-hidden"
              >
                LAUNCH
              </motion.div>
            </div>
          </div>

          {/* In-house */}
          <div className="space-y-2">
            <span className="text-sm font-medium text-text-muted block">IN-HOUSE</span>
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: '100%', opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 3, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="border-2 border-border-light text-text-muted px-4 py-2 rounded text-sm font-medium overflow-hidden whitespace-nowrap flex items-center gap-2"
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
              <span className="ml-auto">Don&apos;t wait!</span>
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

      {/* Client Type Toggle - Accent Background */}
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

          {/* Content Card */}
          <div className="bg-bg-warm rounded-2xl overflow-hidden p-6 md:p-10">
            {/* Header with Title and Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
              <div>
                <div className="flex items-center gap-3">
                  <motion.h3
                    key={`title-${activeTab}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl md:text-4xl font-bold text-text-primary"
                  >
                    {clientTypes[activeTab].title}
                  </motion.h3>
                  {/* Info icon with tooltip */}
                  <div className="relative group">
                    <button className="w-6 h-6 rounded-full border-2 border-text-muted/40 text-text-muted/60 flex items-center justify-center text-sm font-medium hover:border-text-muted hover:text-text-muted transition-colors cursor-help">
                      i
                    </button>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 bg-bg-dark text-text-light text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                      What we deliver also depends on your goals. Let&apos;s figure it out together.
                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-bg-dark" />
                    </div>
                  </div>
                </div>
                <motion.p
                  key={`subtitle-${activeTab}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.05 }}
                  className="text-text-muted mt-1"
                >
                  {clientTypes[activeTab].subtitle}
                </motion.p>
              </div>

              {/* Toggle Switch */}
              <div className="inline-flex bg-border-light rounded-full p-1 shrink-0 self-start">
                {clientTypes.map((client, index) => (
                  <button
                    key={client.id}
                    onClick={() => setActiveTab(index)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer ${
                      activeTab === index
                        ? 'bg-bg-dark text-text-light'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {client.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <motion.p
              key={`desc-${activeTab}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-text-primary text-lg mb-10 max-w-2xl"
            >
              {clientTypes[activeTab].description}
            </motion.p>

            {/* Offerings List */}
            <div className="border-t border-border-light">
              {clientTypes[activeTab].offerings.map((offering, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.15 + index * 0.05 }}
                  className="py-6 border-b border-border-light grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8"
                >
                  <h4 className="text-xl font-semibold text-text-primary">{offering.title}</h4>
                  <p className="md:col-span-2 text-text-muted">{offering.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
