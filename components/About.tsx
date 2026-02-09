'use client';

import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';
import SlotCounter from './ui/SlotCounter';
import ChatButton from './ui/ChatButton';

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  const stats = [
    { number: 16, prefix: '', suffix: '+', label: 'years of design experience' },
    { number: 100, prefix: '', suffix: '%', label: 'embedded in your workflow' },
    { number: 24, prefix: '', suffix: 'hr', label: 'response time' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <SectionLabel>About</SectionLabel>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary mt-6 mb-6 leading-tight"
        >
          Product design for startups and scale-ups.
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-lg text-text-muted max-w-2xl mb-12"
        >
          We drive design projects from wireframe to full release alongside your
          engineers. Embedded in your team, not outside it.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-left">
              <div className="flex items-center gap-3 justify-start mb-2">
                <svg className="w-5 h-5 text-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-4xl md:text-5xl font-bold text-text-primary">
                  <SlotCounter
                    end={stat.number}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    duration={2}
                  />
                </span>
              </div>
              <p className="text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <ChatButton href="#contact">Get in touch</ChatButton>
        </motion.div>
      </div>
    </section>
  );
}
