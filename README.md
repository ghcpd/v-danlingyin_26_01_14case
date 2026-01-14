# CanvasJS Learning Hub

A comprehensive, developer-focused knowledge library website for mastering CanvasJS charts and data visualization. Built with React 18, TypeScript, Tailwind CSS, and Vite.

## 🎯 Project Overview

CanvasJS Learning Hub is an educational platform designed to help developers learn and master CanvasJS through:

- **Official-style Documentation**: Complete guides covering installation, chart types, and configuration
- **Interactive Examples**: Live, rendered chart demonstrations with Line, Bar, and Pie charts
- **Step-by-Step Tutorials**: Practical learning paths from basic chart creation to advanced customization
- **Engaging UI**: Animated homepage with smooth transitions and responsive design

## 🚀 Tech Stack

- **Framework**: React 18.2.0 with TypeScript
- **Build Tool**: Vite 5.0.11
- **Styling**: Tailwind CSS 3.4.1
- **Package Manager**: pnpm
- **Chart Library**: @canvasjs/react-charts 1.0.2
- **Routing**: React Router 6.21.3
- **Animation**: Framer Motion 11.0.3

## 📋 Prerequisites

- Node.js 18+ or 20+
- pnpm (recommended) or npm/yarn

## 🛠️ Installation

1. **Clone or navigate to the project directory**

2. **Install dependencies**
   ```bash
   pnpm install
   ```

   Or using npm:
   ```bash
   npm install
   ```

   Or using yarn:
   ```bash
   yarn install
   ```

## 🏃‍♂️ Development Server

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Production Build

Build for production:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## 📁 Project Structure

```
canvasjs-learning-hub/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Top navigation bar with active state
│   │   └── Layout.tsx       # Main layout wrapper with footer
│   ├── pages/               # Page-level components
│   │   ├── Home.tsx         # Animated hero section and feature cards
│   │   ├── Documentation.tsx # Complete CanvasJS documentation
│   │   ├── Examples.tsx     # Interactive chart examples
│   │   └── Tutorials.tsx    # Step-by-step learning tutorials
│   ├── charts/              # CanvasJS chart wrapper components
│   │   ├── LineChart.tsx    # Line chart component
│   │   ├── BarChart.tsx     # Bar/Column chart component
│   │   └── PieChart.tsx     # Pie chart component
│   ├── data/                # Mock data for charts and tutorials
│   │   ├── examples.ts      # Chart example definitions and data
│   │   └── tutorials.ts     # Tutorial content and code snippets
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts         # Chart and tutorial interfaces
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration (strict mode)
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # This file
```

## 📚 Implemented Features

### Documentation Page
- Introduction to CanvasJS and its benefits
- Installation instructions for npm, pnpm, and yarn
- Basic chart concepts (options object, data points, series)
- Detailed chart type explanations:
  - Line Charts (trends and time series)
  - Bar/Column Charts (category comparison)
  - Pie Charts (proportional data)
  - Area Charts (cumulative data)
- Comprehensive props and configuration table
- Quick start code example

### Examples Page
- **Line Chart Example**: Monthly sales growth with time-based data
- **Bar Chart Example**: Quarterly revenue comparison
- **Pie Chart Example**: Chart type usage distribution
- Each example includes:
  - Descriptive overview
  - Live rendered chart
  - Interactive hover tooltips
  - Responsive design

### Tutorials Page
- **Tutorial 1: Basic Chart Creation**
  - Creating your first CanvasJS chart
  - Essential setup and configuration
  - Live line chart demonstration
  
- **Tutorial 2: Customizing Chart Options**
  - Styling and theming
  - Color customization
  - Axis configuration
  - Live bar chart demonstration

- Each tutorial features:
  - Detailed explanation
  - Complete TypeScript code snippets
  - Live rendered output
  - Reading time and difficulty level

### Home Page
- Animated hero section with gradient text
- Floating colored background elements (CSS animations)
- Smooth fade-in and slide-up animations (Framer Motion)
- Two prominent CTA buttons:
  - "View Documentation"
  - "Explore Examples"
- Three feature cards highlighting key offerings
- "Why Choose CanvasJS?" section with benefits
- Fully responsive layout

### Navigation
- Sticky top navigation bar
- Active route highlighting
- Mobile-responsive menu
- Smooth hover transitions
- Logo with gradient branding

## 🎨 Design Features

- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Animations**: Framer Motion for page transitions, CSS animations for background
- **Modern UI**: Clean, developer-focused aesthetic with Tailwind CSS
- **Typography**: Clear hierarchy with multiple font weights and sizes
- **Color Scheme**: Professional blue gradient palette with accent colors

## 📊 Chart Types Demonstrated

1. **Line Charts**: Time-based data visualization showing trends
2. **Bar Charts**: Categorical data comparison with vertical columns
3. **Pie Charts**: Proportional data representation with legends

All charts feature:
- Animation on load
- Interactive tooltips
- Responsive sizing
- Professional theming
- TypeScript type safety

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- No implicit any
- Strict null checks
- Path aliases (@/* maps to src/*)

### Tailwind CSS
- Custom color palette (primary blue shades)
- Custom animations (fade-in, slide-up, float)
- Responsive breakpoints
- Utility-first styling

### Vite
- Fast HMR (Hot Module Replacement)
- Optimized production builds
- Path alias resolution
- React plugin integration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Development Notes

- **Mock Data**: All chart data is defined in `src/data/` for easy modification
- **Type Safety**: Comprehensive TypeScript interfaces ensure data consistency
- **Component Isolation**: Reusable components for maintainability
- **No Backend**: Completely frontend-focused, no API dependencies
- **Performance**: Lazy loading ready, optimized bundle size

## 🎓 Learning Resources

After exploring this hub, developers will understand:
- How to install and integrate CanvasJS with React
- Basic chart creation and data structure
- Chart type selection based on use case
- Customization options and theming
- Responsive chart design patterns

## 🚧 Known Limitations

- No user authentication (not in scope)
- No backend services (frontend-only)
- No user-generated content capabilities
- Limited to three chart types in examples (can be extended)

## 🤝 Contributing

This is an educational demonstration project. To extend it:
1. Add more chart types in `src/charts/`
2. Create additional tutorials in `src/data/tutorials.ts`
3. Expand documentation sections
4. Implement advanced CanvasJS features

## 📄 License

Educational use. See CanvasJS licensing for commercial usage.

## 🙋 Support

For CanvasJS-specific questions, refer to the official [CanvasJS documentation](https://canvasjs.com/docs/).

---

**Built with ❤️ for developers learning data visualization**
