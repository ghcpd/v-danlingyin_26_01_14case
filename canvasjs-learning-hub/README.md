# CanvasJS Learning Hub

A developer-focused knowledge library website for learning CanvasJS charting, featuring interactive examples, step-by-step tutorials, and comprehensive documentation.

![CanvasJS Learning Hub](https://img.shields.io/badge/CanvasJS-Learning%20Hub-369EAD?style=for-the-badge)

## 🚀 Project Overview

CanvasJS Learning Hub is designed to help developers quickly learn and master CanvasJS charting library. The platform provides:

- **Interactive Documentation** - Comprehensive guides on CanvasJS fundamentals
- **Live Chart Examples** - Rendered charts with real data
- **Step-by-Step Tutorials** - Guided learning paths with code snippets and outputs
- **Animated Homepage** - Engaging UI with smooth animations

## 📚 Purpose

This library serves as a complete learning resource for CanvasJS, helping developers:

- Understand basic and advanced chart concepts
- Learn through practical, working examples
- Follow structured tutorials for skill building
- Reference API documentation and configurations

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI Framework |
| **TypeScript** | Type-safe development |
| **Vite** | Build tool & dev server |
| **Tailwind CSS** | Utility-first styling |
| **CanvasJS** | Chart rendering library |
| **React Router** | Client-side routing |
| **Framer Motion** | Animations |
| **pnpm** | Package manager |

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd canvasjs-learning-hub
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm lint` | Run ESLint |

## 📁 Project Structure

```
canvasjs-learning-hub/
├── public/                 # Static assets
├── src/
│   ├── charts/            # CanvasJS chart wrapper components
│   │   ├── ChartWrapper.tsx
│   │   ├── LineChart.tsx
│   │   ├── BarChart.tsx
│   │   └── PieChart.tsx
│   │
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Layout.tsx
│   │   ├── Card.tsx
│   │   ├── Button.tsx
│   │   ├── CodeBlock.tsx
│   │   └── Badge.tsx
│   │
│   ├── data/              # Mock data & content
│   │   ├── documentation.ts
│   │   ├── examples.ts
│   │   └── tutorials.ts
│   │
│   ├── hooks/             # Custom React hooks
│   │   ├── useWindowSize.ts
│   │   └── useCopyToClipboard.ts
│   │
│   ├── pages/             # Page components
│   │   ├── HomePage.tsx
│   │   ├── DocumentationPage.tsx
│   │   ├── ExamplesPage.tsx
│   │   ├── TutorialsPage.tsx
│   │   └── NotFoundPage.tsx
│   │
│   ├── types/             # TypeScript type definitions
│   │   └── index.ts
│   │
│   ├── utils/             # Utility functions
│   │   └── helpers.ts
│   │
│   ├── App.tsx            # Root component with routing
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles & Tailwind
│
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── vite.config.ts         # Vite configuration
```

## 📖 Implemented Features

### Documentation Sections
- ✅ Introduction to CanvasJS
- ✅ Installation instructions (npm/pnpm)
- ✅ Basic chart concepts (Options, Data Series, Data Points)
- ✅ Chart types overview (Line, Bar, Pie, Area)
- ✅ Props and configuration reference

### Chart Examples
- ✅ Basic Line Chart (Monthly Visitors)
- ✅ Basic Bar Chart (Quarterly Sales)
- ✅ Basic Pie Chart (Market Share)

### Tutorials
- ✅ **Creating Your First Chart** (Beginner)
  - Setting up the component
  - Defining chart options
  - Complete component example
- ✅ **Customizing Chart Options** (Intermediate)
  - Using themes
  - Adding legends
  - Customizing axes
  - Custom colors

### Navigation
- ✅ Home
- ✅ Documentation
- ✅ Examples
- ✅ Tutorials

## 🎨 Exploring Charts & Tutorials

### View Examples
1. Navigate to the **Examples** page
2. Use filter buttons to view charts by type
3. Each example shows a live rendered chart

### Follow Tutorials
1. Navigate to the **Tutorials** page
2. Select a tutorial based on difficulty
3. Progress through steps with code snippets and live outputs
4. Use navigation buttons or dots to move between steps

### Read Documentation
1. Navigate to the **Documentation** page
2. Use sidebar navigation to jump to sections
3. Code examples include copy-to-clipboard functionality

## ⚡ Key Features

- **Responsive Design** - Works on mobile, tablet, and desktop
- **Animated Homepage** - Floating shapes, animated charts, smooth transitions
- **Live Charts** - All examples render real CanvasJS charts
- **Code Copy** - One-click code snippet copying
- **Accessible** - ARIA labels, semantic HTML, keyboard navigation
- **Lazy Loading** - Pages load on demand for better performance

## 🔒 TypeScript Configuration

The project uses strict TypeScript with:
- `strict: true`
- `noImplicitAny: true`
- `strictNullChecks: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`

## ⚠️ Known Limitations

1. **No Backend** - All data is mock/static
2. **No Authentication** - Public access only
3. **No User Content** - Read-only tutorials and examples
4. **Limited Chart Types** - Focuses on Line, Bar, Pie (extendable)

## 📄 License

This project is built for educational purposes to demonstrate CanvasJS capabilities.

## 🤝 Contributing

Contributions are welcome! Feel free to add more examples, tutorials, or documentation sections.

---

Built with ❤️ for developers learning CanvasJS
