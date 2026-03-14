import { useState, useEffect } from 'react';
import HangmanVisual from './components/HangmanVisual';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import GameControls from './components/GameControls';
import './App.css';

const WORDS = [
  'JAVASCRIPT', 'PROGRAMMING', 'COMPUTER', 'DEVELOPER', 'ALGORITHM',
  'FUNCTION', 'VARIABLE', 'DATABASE', 'INTERFACE', 'KEYBOARD',
  'MONITOR', 'SOFTWARE', 'HARDWARE', 'NETWORK', 'INTERNET',
  'BROWSER', 'CONSOLE', 'DEBUGGING', 'COMPILE', 'EXECUTE',
  'MEMORY', 'PROCESSOR', 'CIRCUIT', 'BINARY', 'DIGITAL'
];

const MAX_WRONG_GUESSES = 6;

function App() {
  const [currentWord, setCurrentWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'

  // Initialize game
  useEffect(() => {
    startNewGame();
  }, []);

  // Check win/loss conditions
  useEffect(() => {
    if (!currentWord) return;

    // Check if won
    const won = currentWord.split('').every(letter => guessedLetters.includes(letter));
    if (won) {
      setGameStatus('won');
      return;
    }

    // Check if lost
    if (wrongGuesses >= MAX_WRONG_GUESSES) {
      setGameStatus('lost');
    }
  }, [guessedLetters, wrongGuesses, currentWord]);

  const startNewGame = () => {
    const randomWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    setCurrentWord(randomWord);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameStatus('playing');
  };

  const handleLetterClick = (letter) => {
    if (gameStatus !== 'playing' || guessedLetters.includes(letter)) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!currentWord.includes(letter)) {
      setWrongGuesses(wrongGuesses + 1);
    }
  };

  return (
    <div className="app">
      <h1 className="title">🎮 Hangman Game</h1>
      
      <HangmanVisual wrongGuesses={wrongGuesses} />
      
      <WordDisplay word={currentWord} guessedLetters={guessedLetters} />
      
      <GameControls
        onNewGame={startNewGame}
        gameStatus={gameStatus}
        wrongGuesses={wrongGuesses}
        maxWrongGuesses={MAX_WRONG_GUESSES}
        currentWord={currentWord}
      />
      
      <Keyboard
        onLetterClick={handleLetterClick}
        guessedLetters={guessedLetters}
        disabled={gameStatus !== 'playing'}
      />
    </div>
  );
}

export default App;
