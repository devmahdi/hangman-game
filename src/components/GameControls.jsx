import { motion } from 'framer-motion';

const GameControls = ({ onNewGame, gameStatus, wrongGuesses, maxWrongGuesses, currentWord }) => {
  const getMessage = () => {
    if (gameStatus === 'won') {
      return { text: '🎉 You Win!', color: '#51cf66' };
    }
    if (gameStatus === 'lost') {
      return { text: `😢 Game Over! Word was: ${currentWord}`, color: '#e63946' };
    }
    return { text: `Wrong guesses: ${wrongGuesses} / ${maxWrongGuesses}`, color: '#666' };
  };

  const message = getMessage();

  return (
    <div style={{ textAlign: 'center', margin: '30px 0' }}>
      <motion.div
        key={gameStatus}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        style={{
          fontSize: '1.5em',
          fontWeight: 'bold',
          color: message.color,
          marginBottom: '20px',
          minHeight: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {message.text}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)' }}
        whileTap={{ scale: 0.95 }}
        onClick={onNewGame}
        style={{
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: 'bold',
          background: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      >
        New Game
      </motion.button>
    </div>
  );
};

export default GameControls;
