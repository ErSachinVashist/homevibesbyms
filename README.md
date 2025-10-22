# HomeVibes - Modern Home Decor Website 🏠✨

A modern, responsive home decor e-commerce website built with React, Vite, and Tailwind CSS. This project showcases beautiful home decor collections with a focus on seasonal styling and room inspiration.

🌐 **Live Demo**: [View on GitHub Pages](https://ersachinvashist.github.io/homevibesbyms/)

## Features

- **Modern Design**: Clean, minimalist interface with a focus on home decor presentation
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive Components**: Dynamic navigation with smooth scrolling, product showcases, and room inspiration
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Centralized Content**: All static content managed through a single configuration file
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## Live Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the master branch triggers a new deployment.

**Site URL**: https://ersachinvashist.github.io/homevibesbyms/

## Technologies Used

- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons
- **GitHub Pages**: Free hosting for static sites
- **GitHub Actions**: Automated CI/CD deployment

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ErSachinVashist/homevibesbyms.git
   cd homevibesbyms
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Deployment

### Automatic Deployment (Recommended)
This project uses GitHub Actions for automatic deployment to GitHub Pages. Simply push to the `master` branch and the site will be deployed automatically.

### Manual Deployment
To manually deploy to GitHub Pages:
```bash
npm run deploy
```

### Deployment Configuration
- **Base Path**: `/homevibesbyms/` (configured in `vite.config.js`)
- **Build Output**: `dist/` directory
- **Deployment Branch**: `gh-pages` (automatically created)
- **GitHub Actions Workflow**: `.github/workflows/deploy.yml`

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
