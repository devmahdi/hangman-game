# Deployment Documentation

## Overview

The Hangman Game is deployed to GitHub Pages using a continuous deployment workflow. The application is built with React and Vite, then served as a static site.

## Deployment Architecture

```
main branch (source code)
    ↓
React/Vite build process
    ↓
gh-pages branch (production build)
    ↓
GitHub Pages
    ↓
https://devmahdi.github.io/hangman-game/
```

## Current Deployment Status

| Component | Status | Details |
|-----------|--------|---------|
| **App URL** | ✅ Live | https://devmahdi.github.io/hangman-game/ |
| **Branch** | `gh-pages` | Production builds served from here |
| **Build Tool** | Vite | Fast, optimized production builds |
| **Framework** | React 18.x | Component-based architecture |
| **Animations** | Framer Motion | Smooth transitions and effects |
| **HTTPS** | ✅ Enforced | Automatic by GitHub Pages |

## Build & Deployment Process

### Local Development

```bash
# Install dependencies
npm install

# Start development server with HMR
npm run dev
# Server runs at http://localhost:5173

# Type checking (TypeScript/JSX)
npm run type-check

# Build for production
npm run build
# Output: ./dist/

# Preview production build
npm run preview
```

### GitHub Pages Deployment

GitHub Pages is configured to serve from the `gh-pages` branch at the repository root.

**Configuration:**
- **Source:** `gh-pages` branch
- **Path:** `/` (root)
- **Build Status:** Automatic (manual triggers available)

### Continuous Integration

When code is pushed to the `main` branch:

1. **Build Phase** - Vite builds React app to `dist/`
2. **Deploy Phase** - Contents of `dist/` pushed to `gh-pages` branch
3. **GitHub Pages** - Automatically deploys new commit to live site

## Version History

### Production (gh-pages branch)

The `gh-pages` branch contains only the built application files:
- `index.html` - Application entry point
- `assets/` - JavaScript bundles and CSS files
- `.nojekyll` - Prevents Jekyll processing (optional but recommended)

### Source Code (main branch)

The `main` branch contains the React source code:
- `src/` - React components and styles
- `package.json` - Dependencies and build scripts
- `vite.config.js` - Build configuration
- `index.html` - HTML template

## File Sizes (Production Build)

| File | Size | Purpose |
|------|------|---------|
| `index-C93-peDo.js` | ~316 KB | React + Framer Motion + Game Logic |
| `index-CM5dFY9j.css` | ~990 B | Game styling |

## Performance

- **Build Time:** ~17 seconds
- **First Paint:** < 2s
- **Asset Loading:** HTTP/2 optimized
- **Bundle Analysis:** Vite creates optimized chunks

## Troubleshooting

### Site Not Updating After Push

1. Check GitHub Pages build status: Settings → Pages → Build history
2. Verify `gh-pages` branch exists: `git branch -a`
3. Ensure assets are deployed: Check `dist/` contents

### Build Errors

1. Clear node_modules: `rm -rf node_modules && npm install`
2. Clear Vite cache: `rm -rf .vite`
3. Check Node version: Should be 16.x or higher
4. Verify dependencies: `npm list react framer-motion vite`

### Performance Issues

1. Check browser cache: Clear and do hard refresh (Ctrl+Shift+R)
2. Verify asset loading in DevTools Network tab
3. Check for console errors in DevTools

## Rollback Procedure

If you need to rollback to a previous version:

```bash
# View deployment history
git log --oneline gh-pages | head -10

# Reset to previous commit
git reset --hard <commit-hash>
git push origin gh-pages --force-with-lease

# GitHub Pages will deploy the previous version
```

## Monitoring

### Check Live Deployment

```bash
# Test main site URL
curl -I https://devmahdi.github.io/hangman-game/

# Test asset loading
curl https://devmahdi.github.io/hangman-game/assets/index-*.js | head -c 100
```

### Build Status

- GitHub Pages build log: Repository Settings → Pages → Build history
- Recent deployments: Deploy history shows timestamp and commit SHA

## Security

- **HTTPS:** Enforced automatically by GitHub Pages
- **Content Security Policy:** Inherited from GitHub Pages defaults
- **Update Dependencies:** Run `npm outdated` regularly

## Related Documentation

- [README.md](README.md) - Game features and usage
- [VALIDATION_REPORT.md](VALIDATION_REPORT.md) - Original validation results
- GitHub Repository: https://github.com/devmahdi/hangman-game
- GitHub Pages Docs: https://docs.github.com/en/pages

## Last Updated

2026-03-14 - React migration to v2.0 with GitHub Pages deployment
