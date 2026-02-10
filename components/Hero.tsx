'use client';

import { motion } from 'framer-motion';
import ChatButton from './ui/ChatButton';
// import LogoTicker from './LogoTicker';

export default function Hero() {
  const line1Words = ['From', 'seed', 'to', 'scale.'];
  const line2Words = ['Design', 'that', 'helps', 'startups', 'flourish.'];

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    }),
  };

  return (
    <section className="relative min-h-screen bg-bg-warm pt-32 pb-20 overflow-hidden">
      {/* Flare background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/flare-background.jpg)' }}
      />

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Headline */}
        <div className="mb-8">
          <h1 className="text-[40px] md:text-[72px] lg:text-[90px] font-bold leading-[1.1] text-text-primary">
            <span className="block">
              {line1Words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordAnimation}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block">
              {line2Words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i + line1Words.length}
                  initial="hidden"
                  animate="visible"
                  variants={wordAnimation}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-lg text-text-muted max-w-xl mb-10"
        >
          Product design studio for startups ready to grow. Supomelo is a mashup of
          Startup + Pomelo, carrying the meaning of prosperity and abundance for startups.
        </motion.p>

        {/* CTA and Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <ChatButton href="#contact" />
        </motion.div>

        {/* Logo Ticker - hidden until we have client logos
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-24"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-text-muted mb-8">
            Trusted by ambitious teams
          </p>
          <LogoTicker />
        </motion.div>
        */}
      </div>
    </section>
  );
}
