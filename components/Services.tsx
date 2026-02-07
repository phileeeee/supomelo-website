'use client';

import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';

const services = [
  {
    icon: '🎯',
    title: 'UX Design',
    description: 'Research-led wireframes and flows. Expect options that spark product discussion.',
  },
  {
    icon: '✨',
    title: 'UI Design',
    description: 'Polished, dev-ready interfaces that meet accessibility standards.',
  },
  {
    icon: '🧩',
    title: 'Design Systems',
    description: 'Scalable component libraries that keep your product consistent as you grow.',
  },
  {
    icon: '⚡',
    title: 'Prototyping',
    description: 'Interactive prototypes to test, align, and validate ideas with real users.',
  },
  {
    icon: '🤖',
    title: 'AI Product Design',
    description: 'Designing intuitive AI-powered features and workflows for B2B products.',
  },
  {
    icon: '🔍',
    title: 'User Research',
    description: 'Scripts, interviews, and testing that inform smart design decisions.',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel light>Services</SectionLabel>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-text-light mt-6 mb-12"
        >
          What I can help with
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-card-dark rounded-2xl p-6 border border-border-dark transition-all duration-200 hover:shadow-xl hover:shadow-black/20"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-light mb-2">
                {service.title}
              </h3>
              <p className="text-text-muted">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
