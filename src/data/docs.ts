import { DocSection } from '../types/content';

export const docSections: DocSection[] = [
  {
    id: 'intro',
    title: 'Introduction to CanvasJS',
    description:
      'CanvasJS is a performant, flexible charting library that renders fast, responsive data visualizations using HTML5 Canvas with an approachable API.',
    bullets: [
      'Lightweight footprint with smart rendering optimizations',
      'Supports live data updates and interactive features',
      'Built-in theming, tooltips, legends, and animations'
    ]
  },
  {
    id: 'install',
    title: 'Installation',
    description: 'Install via npm (recommended) or include via CDN for quick starts.',
    bullets: [
      'npm: pnpm add canvasjs-react-charts canvasjs',
      'CDN: use <script> tags for CanvasJS and the React wrapper',
      'Import CanvasJSChart component and pass a strongly typed options object'
    ]
  },
  {
    id: 'concepts',
    title: 'Basic Chart Concepts',
    description:
      'Every chart is composed of axes, data series, and UI elements like legends and tooltips. Options configure visuals, behavior, and data formatting.',
    bullets: [
      'Axes: configure titles, formatters, grid, and ranges',
      'Series: type, dataPoints, legends, and styling',
      'Interactivity: tooltips, zooming, panning, and animation'
    ]
  },
  {
    id: 'types',
    title: 'Common Chart Types',
    description: 'Start with these foundational chart types for typical data stories.',
    bullets: [
      'Line: trends over time',
      'Bar/Column: comparisons across categories',
      'Pie: composition and distribution',
      'Area: stacked or filled trend visuals'
    ]
  },
  {
    id: 'props',
    title: 'Props & Configuration Overview',
    description:
      'Key properties you will configure frequently when building CanvasJS charts.',
    bullets: [
      'title: text, font settings, horizontal alignment',
      'axisX/axisY: titles, formatting, intervals, grid styling',
      'data: array of series with type, name, dataPoints, legends',
      'theme/backgroundColor: light/dark presets for quick theming'
    ]
  }
];
