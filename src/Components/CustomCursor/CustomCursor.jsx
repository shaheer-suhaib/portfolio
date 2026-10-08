import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const INTERACTIVE = 'a, button, [role="button"], input, textarea, .work-item, .project-card, .skill-item, .contact-detail';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Pointer-based cursor only makes sense for a real, hoverable pointer.
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      // e.target can be a non-Element node (text, document), which has no
      // .closest — guard before calling it.
      const el = e.target instanceof Element ? e.target : null;
      setIsHovering(Boolean(el && el.closest(INTERACTIVE)));
    };

    const leave = () => setPos({ x: -100, y: -100 });

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerleave', leave);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className={`cursor-dot ${isHovering ? 'hover' : ''}`}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 1400, damping: 60, mass: 0.3 }}
      />
      <motion.div
        className={`cursor-ring ${isHovering ? 'hover' : ''}`}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: 'spring', stiffness: 260, damping: 26, mass: 0.6 }}
      />
    </>
  );
};

export default CustomCursor;
