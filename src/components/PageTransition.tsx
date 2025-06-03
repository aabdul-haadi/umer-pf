import React from 'react';
import { motion } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const pageVariants = {
  initial: {
    opacity: 0,
    x: '100%'
  },
  in: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: '-100%'
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
};

const PageTransition: React.FC<PageTransitionProps> = ({ children, backgroundImage }) => {
  return (
    <>
      <div 
        className="page-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="gradient-overlay" />
      <div className="mesh-grid animate-grain" />
      
      <motion.div
        initial="initial"
        animate="in"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className="min-h-screen pt-20 relative"
      >
        {children}
      </motion.div>
    </>
  );
};

export default PageTransition;