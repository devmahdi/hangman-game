import { motion } from 'framer-motion';

const WordDisplay = ({ word, guessedLetters }) => {
  return (
    <div style={{
      fontSize: '2.5em',
      letterSpacing: '15px',
      fontWeight: 'bold',
      textAlign: 'center',
      margin: '30px 0',
      color: '#333',
      minHeight: '70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      {word.split('').map((letter, index) => (
        <motion.span
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.05 }}
          style={{
            display: 'inline-block',
            minWidth: '40px',
            borderBottom: '3px solid #667eea',
            padding: '5px'
          }}
        >
          {guessedLetters.includes(letter) ? (
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {letter}
            </motion.span>
          ) : ''}
        </motion.span>
      ))}
    </div>
  );
};

export default WordDisplay;
