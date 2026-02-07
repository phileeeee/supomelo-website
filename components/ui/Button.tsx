'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg cursor-pointer transition-all duration-300 ease-out';

  const variants = {
    primary: 'bg-accent text-accent-text hover:bg-bg-dark hover:text-text-light border border-transparent hover:border-bg-dark',
    secondary: 'bg-card-dark text-text-light hover:bg-border-dark',
    outline: 'border border-border-light text-text-primary hover:bg-bg-dark hover:text-text-light hover:border-bg-dark',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = motion.create(href ? 'a' : 'button');

  return (
    <MotionComponent
      href={href}
      onClick={onClick}
      type={!href ? type : undefined}
      className={combinedClassName}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
