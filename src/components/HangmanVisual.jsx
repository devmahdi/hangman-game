import { motion } from 'framer-motion';

const HangmanVisual = ({ wrongGuesses }) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };

  const circleVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <svg width="300" height="350" viewBox="0 0 300 350" style={{ margin: '20px auto', display: 'block' }}>
      {/* Gallows base */}
      <motion.line
        x1="20" y1="330" x2="150" y2="330"
        stroke="#333"
        strokeWidth="4"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      {/* Gallows vertical pole */}
      <motion.line
        x1="50" y1="330" x2="50" y2="20"
        stroke="#333"
        strokeWidth="4"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      {/* Gallows horizontal beam */}
      <motion.line
        x1="50" y1="20" x2="200" y2="20"
        stroke="#333"
        strokeWidth="4"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />
      
      {/* Gallows rope */}
      <motion.line
        x1="200" y1="20" x2="200" y2="60"
        stroke="#333"
        strokeWidth="3"
        initial="hidden"
        animate="visible"
        variants={pathVariants}
      />

      {/* Head */}
      {wrongGuesses >= 1 && (
        <motion.circle
          cx="200" cy="85" r="25"
          stroke="#e63946"
          strokeWidth="4"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={circleVariants}
        />
      )}

      {/* Body */}
      {wrongGuesses >= 2 && (
        <motion.line
          x1="200" y1="110" x2="200" y2="200"
          stroke="#e63946"
          strokeWidth="4"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      )}

      {/* Left arm */}
      {wrongGuesses >= 3 && (
        <motion.line
          x1="200" y1="130" x2="160" y2="170"
          stroke="#e63946"
          strokeWidth="4"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      )}

      {/* Right arm */}
      {wrongGuesses >= 4 && (
        <motion.line
          x1="200" y1="130" x2="240" y2="170"
          stroke="#e63946"
          strokeWidth="4"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      )}

      {/* Left leg */}
      {wrongGuesses >= 5 && (
        <motion.line
          x1="200" y1="200" x2="170" y2="260"
          stroke="#e63946"
          strokeWidth="4"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      )}

      {/* Right leg */}
      {wrongGuesses >= 6 && (
        <motion.line
          x1="200" y1="200" x2="230" y2="260"
          stroke="#e63946"
          strokeWidth="4"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      )}
    </svg>
  );
};

export default HangmanVisual;
