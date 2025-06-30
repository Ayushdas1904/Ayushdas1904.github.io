'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';

export default function ScrollToTopBtn() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-20 sm:bottom-12 right-6 z-50 p-3 rounded-full bg-white text-black shadow-md 
                     dark:bg-zinc-900 dark:text-white dark:shadow-lg 
                     border border-gray-200 dark:border-zinc-700 
                     hover:scale-110 transition-transform"
          aria-label="Scroll to top"
        >
          <ChevronsUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
