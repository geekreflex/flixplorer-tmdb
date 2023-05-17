import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useDrawer } from '../contexts/drawer';
import React from 'react';

const Drawer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isOpen, closeDrawer } = useDrawer();
  const controls = useAnimation();

  React.useEffect(() => {
    if (isOpen) {
      controls.start({ x: 0 });
    } else {
      controls.start({ x: '100%' });
    }
  }, [isOpen, controls]);

  const onOverlayClick = () => {
    closeDrawer();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={controls}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: '400px',
            height: '100%',
            background: '#242424',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            zIndex: 999,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            width: '100%',
            height: '100%',
            background: 'black',
            zIndex: 998,
          }}
          onClick={onOverlayClick}
        />
      )}
    </AnimatePresence>
  );
};

export default Drawer;
