import { motion } from 'framer-motion';

const Keyboard = ({ onLetterClick, guessedLetters, disabled }) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const getButtonStyle = (letter) => {
    const baseStyle = {
      padding: '12px',
      fontSize: '16px',
      fontWeight: 'bold',
      border: '2px solid #667eea',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      minWidth: '45px',
    };

    if (guessedLetters.includes(letter)) {
      return {
        ...baseStyle,
        background: '#ddd',
        borderColor: '#ddd',
        color: '#999',
        cursor: 'not-allowed',
        opacity: 0.6,
      };
    }

    return {
      ...baseStyle,
      background: 'white',
      color: '#667eea',
    };
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(45px, 1fr))',
      gap: '8px',
      maxWidth: '700px',
      margin: '30px auto',
      padding: '0 20px',
    }}>
      {letters.map((letter, index) => (
        <motion.button
          key={letter}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.02 }}
          whileHover={!guessedLetters.includes(letter) && !disabled ? { scale: 1.1, backgroundColor: '#667eea', color: 'white' } : {}}
          whileTap={!guessedLetters.includes(letter) && !disabled ? { scale: 0.95 } : {}}
          onClick={() => onLetterClick(letter)}
          disabled={guessedLetters.includes(letter) || disabled}
          style={getButtonStyle(letter)}
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
};

export default Keyboard;
