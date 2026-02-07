'use client';

import { motion } from 'framer-motion';
import SectionLabel from './ui/SectionLabel';

export default function Founder() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
    },
  };

  return (
    <section className="py-20 lg:py-32 bg-bg-warm">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
        >
          <SectionLabel>Founder</SectionLabel>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src="/supomelo-website/profile.jpeg"
              alt="Founder"
              className="w-64 h-64 object-cover rounded-full"
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
              [Your Name]
            </h3>
            <p className="text-lg text-text-muted mb-6">
              Founder & Product Designer
            </p>

            <p className="text-text-primary leading-relaxed mb-6">
              With over a decade of experience in product design, I&apos;ve helped
              startups and scale-ups build products that users love. My approach
              combines deep user research with rapid iteration—shipping fast
              without sacrificing quality.
            </p>

            <p className="text-text-primary leading-relaxed mb-8">
              I believe great design happens when you&apos;re embedded in the team,
              not working in silos. That&apos;s why I work closely with founders and
              engineers to bring ideas to life quickly.
            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
