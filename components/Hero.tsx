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
      {/* Gradient orbs */}
      {/* Main peachy-coral orb - center right */}
      <div className="absolute top-1/4 right-0 w-[800px] h-[800px] translate-x-1/4">
        <div className="absolute inset-0 bg-[#F5B090]/60 rounded-full blur-[150px]" />
      </div>
      {/* Warm orange orb - upper area */}
      <div className="absolute -top-20 right-1/4 w-[600px] h-[600px]">
        <div className="absolute inset-0 bg-[#E87850]/40 rounded-full blur-[120px]" />
      </div>
      {/* Soft pink/lavender orb - top left */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] -translate-y-1/4">
        <div className="absolute inset-0 bg-[#F0D0E0]/50 rounded-full blur-[130px]" />
      </div>
      {/* Bottom peachy cream orb */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] translate-y-1/2">
        <div className="absolute inset-0 bg-[#F5C8A8]/45 rounded-full blur-[140px]" />
      </div>

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
          <span className="text-base text-text-muted flex items-center gap-2">
            <span className="text-accent text-lg">✦</span>
            1 spot left in April
          </span>
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
