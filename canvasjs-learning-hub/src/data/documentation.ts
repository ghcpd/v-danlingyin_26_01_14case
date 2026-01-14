import type { DocSection } from '../types';

export const documentationSections: DocSection[] = [
  {
    id: 'introduction',
    title: 'Introduction to CanvasJS',
    content: `CanvasJS is a responsive HTML5 charting library with a simple API and 10x faster performance compared to traditional SVG-based charting libraries. It supports all modern browsers and platforms including mobile devices.

Built on top of the HTML5 Canvas element, CanvasJS provides smooth animations, interactivity, and high performance even with thousands of data points.`,
    subsections: [
      {
        id: 'why-canvasjs',
        title: 'Why Choose CanvasJS?',
        content: `**Performance**: CanvasJS renders charts using HTML5 Canvas, making it significantly faster than SVG-based libraries, especially with large datasets.

**Easy to Use**: Simple and intuitive API that allows you to create beautiful charts with minimal code.

**Responsive**: Charts automatically resize to fit their container, ensuring they look great on any screen size.

**Interactive**: Built-in support for tooltips, zooming, panning, and click events.

**Rich Features**: Support for multiple chart types, themes, legends, axis customization, and export functionality.`,
      },
      {
        id: 'supported-charts',
        title: 'Supported Chart Types',
        content: `CanvasJS supports a wide variety of chart types:

- **Line Charts**: Basic line, spline, stepped line
- **Area Charts**: Basic area, spline area, stacked area
- **Bar/Column Charts**: Basic bar, column, stacked bar, stacked column
- **Pie Charts**: Pie, doughnut
- **Other Charts**: Scatter, bubble, waterfall, funnel, and more

Each chart type can be customized extensively using the options object.`,
      },
    ],
  },
  {
    id: 'installation',
    title: 'Installation',
    content: `Getting started with CanvasJS in your React project is straightforward. You can install the official React wrapper package using npm or pnpm.`,
    subsections: [
      {
        id: 'npm-install',
        title: 'Using npm',
        content: 'Install the CanvasJS React package:',
        codeExample: `npm install @canvasjs/react-charts`,
      },
      {
        id: 'pnpm-install',
        title: 'Using pnpm',
        content: 'If you prefer pnpm:',
        codeExample: `pnpm add @canvasjs/react-charts`,
      },
      {
        id: 'basic-import',
        title: 'Importing CanvasJS',
        content: 'After installation, import CanvasJS in your React component:',
        codeExample: `import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// Now you can use <CanvasJSChart options={options} />`,
      },
    ],
  },
  {
    id: 'basic-concepts',
    title: 'Basic Chart Concepts',
    content: `Understanding the core concepts of CanvasJS will help you create effective charts. The main components are the options object, data series, and data points.`,
    subsections: [
      {
        id: 'options-object',
        title: 'The Options Object',
        content: `The options object is the configuration center for your chart. It contains all settings including title, axes, legends, and data.`,
        codeExample: `const options = {
  animationEnabled: true,
  exportEnabled: true,
  theme: "light2",
  title: {
    text: "Chart Title"
  },
  axisX: { title: "X Axis" },
  axisY: { title: "Y Axis" },
  data: [/* data series go here */]
};`,
      },
      {
        id: 'data-series',
        title: 'Data Series',
        content: `Each chart can have one or more data series. A series defines the chart type and contains an array of data points.`,
        codeExample: `data: [{
  type: "line",        // Chart type
  name: "Series 1",    // Series name
  showInLegend: true,  // Show in legend
  dataPoints: [
    { x: 1, y: 10 },
    { x: 2, y: 20 },
    { x: 3, y: 30 }
  ]
}]`,
      },
      {
        id: 'data-points',
        title: 'Data Points',
        content: `Data points define the actual values to be plotted. Each point can have x, y values, labels, and custom colors.`,
        codeExample: `dataPoints: [
  { label: "Jan", y: 100 },           // Using label
  { x: new Date(2024, 1), y: 120 },   // Using date
  { x: 1, y: 90, color: "#ff0000" }   // With custom color
]`,
      },
    ],
  },
  {
    id: 'chart-types',
    title: 'Chart Types',
    content: `CanvasJS offers various chart types, each suited for different data visualization needs. Here's an overview of the most commonly used types.`,
    subsections: [
      {
        id: 'line-charts',
        title: 'Line Charts',
        content: `Line charts are ideal for showing trends over time. They connect data points with straight lines, making it easy to see patterns and changes.

**When to use**: Time series data, trends, continuous data

**Variants**: line, spline (smooth curves), stepLine`,
        codeExample: `{
  type: "line",
  markerType: "circle",
  markerSize: 8,
  lineThickness: 2,
  dataPoints: [
    { x: 1, y: 450 },
    { x: 2, y: 560 },
    { x: 3, y: 520 }
  ]
}`,
      },
      {
        id: 'bar-charts',
        title: 'Bar Charts',
        content: `Bar and column charts are excellent for comparing discrete categories. Columns are vertical, bars are horizontal.

**When to use**: Comparing categories, showing rankings, discrete data

**Variants**: column, bar, stackedColumn, stackedBar`,
        codeExample: `{
  type: "column",
  dataPoints: [
    { label: "Product A", y: 100 },
    { label: "Product B", y: 85 },
    { label: "Product C", y: 120 }
  ]
}`,
      },
      {
        id: 'pie-charts',
        title: 'Pie Charts',
        content: `Pie charts show proportions of a whole. They're best when you have a small number of categories that add up to 100%.

**When to use**: Showing proportions, market share, composition

**Variants**: pie, doughnut`,
        codeExample: `{
  type: "pie",
  startAngle: 240,
  indexLabelPlacement: "inside",
  dataPoints: [
    { y: 45, name: "Desktop", legendText: "Desktop" },
    { y: 35, name: "Mobile", legendText: "Mobile" },
    { y: 20, name: "Tablet", legendText: "Tablet" }
  ]
}`,
      },
      {
        id: 'area-charts',
        title: 'Area Charts',
        content: `Area charts are similar to line charts but with the area below the line filled. They emphasize magnitude and are great for showing cumulative totals.

**When to use**: Volume over time, cumulative data, stacked comparisons

**Variants**: area, splineArea, stackedArea`,
        codeExample: `{
  type: "area",
  color: "rgba(54, 158, 173, 0.6)",
  dataPoints: [
    { x: 1, y: 100 },
    { x: 2, y: 150 },
    { x: 3, y: 125 },
    { x: 4, y: 200 }
  ]
}`,
      },
    ],
  },
  {
    id: 'configuration',
    title: 'Props and Configuration',
    content: `CanvasJS offers extensive configuration options to customize every aspect of your charts. Here's a reference for the most important properties.`,
    subsections: [
      {
        id: 'chart-props',
        title: 'Chart-Level Properties',
        content: `These properties control the overall chart appearance and behavior.`,
        codeExample: `{
  animationEnabled: true,    // Enable animations
  exportEnabled: true,       // Enable export button
  zoomEnabled: true,         // Enable zoom on drag
  theme: "light2",           // Built-in theme
  backgroundColor: "#fff",   // Custom background
  width: 600,                // Fixed width (optional)
  height: 400                // Fixed height (optional)
}`,
      },
      {
        id: 'title-props',
        title: 'Title Properties',
        content: `Customize the chart title and subtitles.`,
        codeExample: `title: {
  text: "Main Title",
  fontSize: 24,
  fontFamily: "Arial",
  fontWeight: "bold",
  fontColor: "#333",
  padding: 10
},
subtitles: [{
  text: "Subtitle text",
  fontSize: 14
}]`,
      },
      {
        id: 'axis-props',
        title: 'Axis Properties',
        content: `Configure X and Y axes including labels, gridlines, and formatting.`,
        codeExample: `axisX: {
  title: "Categories",
  interval: 1,
  labelAngle: -45,
  gridThickness: 0
},
axisY: {
  title: "Values",
  includeZero: true,
  prefix: "$",
  suffix: "K",
  gridThickness: 1,
  gridColor: "#e0e0e0"
}`,
      },
      {
        id: 'legend-props',
        title: 'Legend Properties',
        content: `Control legend appearance and position.`,
        codeExample: `legend: {
  cursor: "pointer",
  verticalAlign: "bottom",   // top, center, bottom
  horizontalAlign: "center", // left, center, right
  fontSize: 12,
  fontFamily: "Arial"
}`,
      },
    ],
  },
];

export const getDocSectionById = (id: string): DocSection | undefined => {
  return documentationSections.find((section) => section.id === id);
};
