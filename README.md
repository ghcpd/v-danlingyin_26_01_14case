# CanvasJS Learning Hub

A developer-focused knowledge library for learning CanvasJS with official-style documentation, interactive chart examples, and step-by-step tutorials. Built with React 18, TypeScript, Vite, Tailwind CSS, and CanvasJS.

## Features
- Animated homepage with hero CTA, gradient orbs, and live chart preview
- Documentation covering introduction, installation, concepts, chart types, and props overview
- Interactive examples page with live CanvasJS Line, Bar (Column), and Pie charts
- Tutorials page with code snippets and rendered chart outputs for basic creation and customization
- Top navigation with active state highlighting and responsive layout
- Framer Motion animations and Tailwind-driven styling

## Tech Stack
- React 18 + TypeScript (strict)
- Vite
- Tailwind CSS
- CanvasJS via `canvasjs-react-charts`
- Framer Motion
- React Router 6

## Getting Started
1) Install dependencies
```bash
pnpm install
```

2) Run the dev server
```bash
pnpm dev
```

3) Build for production
```bash
pnpm build
```

## Project Structure
```
src/
  components/      # Navbar, cards, animated background
  pages/           # Home, Documentation, Examples, Tutorials
  charts/          # (reserved for wrappers)
  hooks/           # useActivePath
  types/           # Shared TypeScript types & CanvasJS d.ts
  utils/           # Helpers (classNames)
  data/            # Mock docs, examples, tutorials, homepage highlights
  App.tsx          # Routes and layout
  main.tsx         # Entry point
```

## Content Guide
- Documentation: Introduction, Installation, Basic concepts, Chart types (Line, Bar, Pie, Area), Props & configuration overview
- Examples: Live Line, Bar (Column), and Pie charts with descriptions
- Tutorials: Basic chart creation and Customizing chart options, each with code snippet + rendered chart

## Known Limitations
- Charts use mock/static data; no backend integration
- No authentication or user-generated content (per spec)
