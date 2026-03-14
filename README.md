# Hangman Game - React Version

A modern, animated Hangman game built with **React**, **Vite**, and **Framer Motion** for smooth animations and transitions.

## 🎮 Live Demo

**[Play the Game](https://devmahdi.github.io/hangman-game/)**

## ✨ Features

### Core Gameplay
- Classic Hangman word-guessing game
- 6 incorrect guesses allowed before game over
- Category-based word selection
- Real-time feedback on guesses
- Restart game at any time

### Modern UI/UX
- **React-based architecture** - Component-driven, maintainable code
- **Framer Motion animations** - Smooth transitions and visual feedback
- **Vite build tool** - Fast development and optimized production builds
- **Responsive design** - Works on desktop, tablet, and mobile devices
- **Category display** - Visual feedback on word categories

## 🏗️ Project Structure

```
hangman-game/
├── src/
│   ├── App.jsx              # Main game component
│   ├── components/
│   │   ├── Hangman.jsx      # Game logic and UI
│   │   ├── GameBoard.jsx    # Game board layout
│   │   └── Letter.jsx       # Individual letter button
│   ├── styles/
│   │   └── App.css          # Game styling
│   └── main.jsx             # React entry point
├── dist/                    # Production build (GitHub Pages)
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
└── README.md                # This file
```

## 🚀 Deployment

### GitHub Pages
- **Branch:** `gh-pages`
- **URL:** https://devmahdi.github.io/hangman-game/
- **Build Tool:** Vite
- **Auto-deploy:** Enabled on push to `main` branch

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Dependencies

- **React** ^18.0.0 - UI framework
- **Framer Motion** ^10.0.0 - Animation library
- **Vite** ^4.0.0 - Build tool

## 🎯 Game Rules

1. A random word is selected from the word bank
2. You have 6 chances to guess incorrect letters
3. Click letters to make guesses
4. Win by guessing all letters before running out of guesses
5. Lose if you make 6 incorrect guesses
6. Restart to play again

## 🎨 Animation Features

- Letter guess animations with Framer Motion
- Hangman drawing progress animations
- Win/lose screen transitions
- Smooth category and word reveals
- Visual feedback for correct/incorrect guesses

## 📊 Version History

### v2.0 - React Migration (Current)
- Migrated from vanilla JavaScript to React
- Added Framer Motion for animations
- Improved component architecture
- Enhanced user experience with smoother transitions
- Deployed to GitHub Pages

### v1.0 - Original Implementation
- Single-file vanilla JavaScript implementation
- Basic HTML/CSS styling
- Core hangman gameplay

## 🐛 Known Issues

None currently. Report issues via GitHub Issues: https://github.com/devmahdi/hangman-game/issues

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Last Updated:** 2026-03-14  
**React Version:** 18.x  
**Node Version:** 16.x+
