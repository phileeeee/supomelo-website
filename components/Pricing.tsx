'use client';

import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';
import ChatButton from './ui/ChatButton';

const deliverables = [
  {
    title: 'Async-first',
    description: 'Work across timezones. Updates, feedback, and deliverables flow without waiting for meetings.',
  },
  {
    title: 'Unlimited revisions',
    description: 'Iterate until it\'s right. No nickel-and-diming for tweaks or changes.',
  },
  {
    title: 'Figma files included',
    description: 'Full ownership of all design files. No extra fees, no strings attached.',
  },
  {
    title: 'Month-to-month',
    description: 'No long-term contracts. Stay because it works, not because you\'re locked in.',
  },
  {
    title: 'Cancel anytime',
    description: 'Pause or stop whenever you need. We\'ll pick up right where we left off.',
  },
];

export default function Pricing() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12"
        >
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mt-6 mb-6 leading-tight">
            No guesswork on pricing,<br />
            we charge $22k/mo.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-16"
        >
          <ChatButton href="#contact">Enquire</ChatButton>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-border-light"
        >
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="py-8 border-b border-border-light grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <h3 className="text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="md:col-span-2 text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
