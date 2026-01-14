import { Tutorial } from '@/types';

export const tutorials: Tutorial[] = [
  {
    id: 'basic-chart-creation',
    title: 'Basic Chart Creation',
    explanation: 
      'Learn how to create your first CanvasJS chart. This tutorial covers the essential steps: importing the library, defining your data structure, and rendering a simple line chart. The chart will automatically handle responsive sizing and basic interactivity.',
    codeSnippet: `import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyChart() {
  const options = {
    animationEnabled: true,
    title: {
      text: "Monthly Sales Data"
    },
    data: [{
      type: "line",
      dataPoints: [
        { x: new Date(2024, 0, 1), y: 450 },
        { x: new Date(2024, 1, 1), y: 520 },
        { x: new Date(2024, 2, 1), y: 580 },
        { x: new Date(2024, 3, 1), y: 620 }
      ]
    }]
  };

  return <CanvasJSChart options={options} />;
}`,
    chartType: 'line',
  },
  {
    id: 'customizing-chart-options',
    title: 'Customizing Chart Options',
    explanation:
      'Discover how to customize your charts with colors, themes, and styling options. This tutorial demonstrates how to modify chart appearance including background colors, axis labels, data point colors, and tooltips to match your application design.',
    codeSnippet: `import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function CustomChart() {
  const options = {
    animationEnabled: true,
    theme: "light2",
    backgroundColor: "#f8f9fa",
    title: {
      text: "Quarterly Revenue",
      fontSize: 24,
      fontColor: "#0369a1"
    },
    axisY: {
      title: "Revenue ($)",
      prefix: "$",
      suffix: "k"
    },
    data: [{
      type: "column",
      color: "#0ea5e9",
      dataPoints: [
        { label: "Q1", y: 1200 },
        { label: "Q2", y: 1850 },
        { label: "Q3", y: 2100 },
        { label: "Q4", y: 2400 }
      ]
    }]
  };

  return <CanvasJSChart options={options} />;
}`,
    chartType: 'bar',
  },
];
