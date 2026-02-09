'use client';

import { motion } from 'framer-motion';

interface ChatButtonProps {
  href?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function ChatButton({ href, onClick, children = 'Book a spot' }: ChatButtonProps) {
  const MotionComponent = motion.create(href ? 'a' : 'button');

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      className="group relative inline-flex items-center gap-3 bg-transparent border border-border-light rounded-full px-2 py-2 pl-6 cursor-pointer overflow-hidden transition-colors duration-300 hover:bg-bg-dark hover:border-bg-dark"
      whileTap={{ scale: 0.98 }}
    >
      {/* Text */}
      <span className="text-base font-medium text-text-primary transition-colors duration-300 group-hover:text-text-light">
        {children}
      </span>

      {/* Icon container with accent bg */}
      <span className="relative flex items-center justify-center w-10 h-10 bg-accent text-white rounded-full overflow-hidden">
        <svg
          className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <svg
          className="absolute w-5 h-5 -translate-x-10 transition-transform duration-300 ease-out group-hover:translate-x-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
    </MotionComponent>
  );
}
