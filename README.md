# 🎮 Hangman Game - React Edition

A modern, animated hangman game built with React, Vite, and Framer Motion. Features smooth SVG animations and a responsive design.

## ✨ Features

### 🎨 Animated SVG Hangman
- **Smooth drawing animations** using Framer Motion
- **Progressive body part reveals** (6 stages)
- **Professional gallows design** with clean SVG paths
- **Color-coded visuals** - gallows in gray, body in red

### 🎯 Interactive Gameplay
- **26 animated alphabet buttons** with hover and tap effects
- **Real-time letter reveal** with spring animations
- **Smart button states** - disabled after use
- **Win/loss detection** with status messages
- **One-click reset** to start a new game

### 📱 Responsive Design
- **Modern gradient background** (purple to violet)
- **Card-based layout** with rounded corners
- **Mobile-friendly keyboard** grid
- **Smooth transitions** on all interactions

### 🎲 Game Content
- **25 programming-themed words**
- **6 wrong guesses allowed**
- **Instant visual feedback**

## 🚀 Tech Stack

- **React 19.2.4** - Modern React with hooks
- **Vite 8.0.0** - Lightning-fast build tool
- **Framer Motion 12.36.0** - Animation library
- **CSS3** - Gradient backgrounds and modern styling

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── HangmanVisual.jsx    # Animated SVG hangman
│   ├── WordDisplay.jsx      # Word with letter reveals
│   ├── Keyboard.jsx         # Interactive alphabet
│   └── GameControls.jsx     # Status and reset
├── App.jsx                  # Main game logic
├── App.css                  # Application styles
└── main.jsx                 # Entry point
```

## 🎬 Animation Details

### Hangman Drawing
- **Path animations**: 0.5s easeInOut
- **Circle animations**: 0.3s easeOut
- **Sequential reveals**: Each body part animates in order

### Keyboard Interaction
- **Staggered entrance**: 0.02s delay per button
- **Hover scale**: 1.1x with color change
- **Tap feedback**: 0.95x scale for tactile feel

### Word Display
- **Letter reveals**: Spring animation (stiffness: 300)
- **Slide in**: Y-axis movement with opacity fade

## 🎮 How to Play

1. **Click letters** to guess the hidden word
2. **Correct guesses** reveal letters in the word
3. **Wrong guesses** add body parts to the hangman
4. **Win** by guessing all letters before 6 wrong guesses
5. **Click "New Game"** to play again

## 📊 Build Output

```
dist/index.html                   0.46 kB │ gzip:   0.29 kB
dist/assets/index-CM5dFY9j.css    0.99 kB │ gzip:   0.51 kB
dist/assets/index-C93-peDo.js   316.06 kB │ gzip: 100.56 kB

✓ built in 262ms
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Key Dependencies

```json
{
  "react": "^19.2.4",
  "react-dom": "^19.2.4",
  "framer-motion": "^12.36.0",
  "vite": "^8.0.0"
}
```

## 🎨 Customization

### Adding New Words
Edit the `WORDS` array in `src/App.jsx`:

```javascript
const WORDS = [
  'JAVASCRIPT', 'PROGRAMMING', 'COMPUTER',
  // Add your words here
];
```

### Changing Colors
Update the colors in component styles:

- **Primary gradient**: `#667eea` to `#764ba2`
- **Gallows color**: `#333`
- **Body parts**: `#e63946`
- **Success**: `#51cf66`

### Adjusting Animations
Modify animation variants in component files:

```javascript
const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut" }
  }
};
```

## 📝 License

This project is open source and available for anyone to use, modify, and learn from.

## 🙏 Acknowledgments

Built with modern web technologies:
- React for component-based architecture
- Framer Motion for buttery-smooth animations
- Vite for instant development feedback

---

**Built with ❤️ using React + Vite + Framer Motion**
