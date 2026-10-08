import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ~900ms total. The old screen held the page for a full 2s before
    // anything rendered, which is a long time to stare at a splash.
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 260);
          return 100;
        }
        return prev + 4;
      });
    }, 26);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loader__inner">
        <motion.p
          className="loader__name"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shaheer Suhaib
        </motion.p>
        <motion.p
          className="loader__role eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          Software Engineer
        </motion.p>

        <div className="loader__track">
          <motion.div
            className="loader__bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.2, ease: 'linear' }}
          />
        </div>

        <p className="loader__count">{String(progress).padStart(3, '0')}</p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
