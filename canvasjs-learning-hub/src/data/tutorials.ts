import type { Tutorial } from '../types';

export const tutorials: Tutorial[] = [
  {
    id: 'basic-chart-creation',
    title: 'Creating Your First CanvasJS Chart',
    description: 'Learn the fundamentals of creating a chart with CanvasJS. This tutorial walks you through setting up a basic chart from scratch.',
    difficulty: 'beginner',
    steps: [
      {
        title: 'Step 1: Setting Up the Component',
        explanation: 'First, we need to import CanvasJS React component and create a basic React component that will render our chart. The CanvasJSChart component accepts an options prop that configures the chart.',
        codeSnippet: `import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyFirstChart() {
  const options = {
    // Chart options will go here
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}`,
      },
      {
        title: 'Step 2: Defining Chart Options',
        explanation: 'The options object is the heart of CanvasJS configuration. We specify the title, enable animations, and define our data series. Each data series has a type (like "line", "column", "pie") and an array of data points.',
        codeSnippet: `const options = {
  animationEnabled: true,
  title: {
    text: "My First Chart"
  },
  data: [{
    type: "column",
    dataPoints: [
      { label: "Apple", y: 10 },
      { label: "Orange", y: 15 },
      { label: "Banana", y: 25 },
      { label: "Mango", y: 30 },
      { label: "Grape", y: 28 }
    ]
  }]
};`,
        chartOptions: {
          animationEnabled: true,
          title: {
            text: 'My First Chart',
          },
          data: [
            {
              type: 'column',
              dataPoints: [
                { label: 'Apple', y: 10 },
                { label: 'Orange', y: 15 },
                { label: 'Banana', y: 25 },
                { label: 'Mango', y: 30 },
                { label: 'Grape', y: 28 },
              ],
            },
          ],
        },
      },
      {
        title: 'Step 3: Complete Component',
        explanation: 'Here is the complete component with all options configured. The chart will render with smooth animations and display a column chart with fruit sales data.',
        codeSnippet: `import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function MyFirstChart() {
  const options = {
    animationEnabled: true,
    title: {
      text: "Fruit Sales"
    },
    axisY: {
      title: "Sales (units)",
      includeZero: true
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "Apple", y: 10 },
        { label: "Orange", y: 15 },
        { label: "Banana", y: 25 },
        { label: "Mango", y: 30 },
        { label: "Grape", y: 28 }
      ]
    }]
  };

  return (
    <div>
      <h2>Fruit Sales Chart</h2>
      <CanvasJSChart options={options} />
    </div>
  );
}

export default MyFirstChart;`,
        chartOptions: {
          animationEnabled: true,
          title: {
            text: 'Fruit Sales',
          },
          axisY: {
            title: 'Sales (units)',
            includeZero: true,
          },
          data: [
            {
              type: 'column',
              dataPoints: [
                { label: 'Apple', y: 10 },
                { label: 'Orange', y: 15 },
                { label: 'Banana', y: 25 },
                { label: 'Mango', y: 30 },
                { label: 'Grape', y: 28 },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: 'customizing-chart-options',
    title: 'Customizing Chart Options',
    description: 'Learn how to customize your CanvasJS charts with themes, colors, legends, and more advanced configuration options.',
    difficulty: 'intermediate',
    steps: [
      {
        title: 'Step 1: Using Themes',
        explanation: 'CanvasJS comes with built-in themes: "light1", "light2", "dark1", and "dark2". Themes control the overall color scheme of your chart including backgrounds, text, and data series colors.',
        codeSnippet: `const options = {
  theme: "dark2", // Try: "light1", "light2", "dark1", "dark2"
  animationEnabled: true,
  title: {
    text: "Themed Chart"
  },
  data: [{
    type: "line",
    dataPoints: [
      { x: 1, y: 71 },
      { x: 2, y: 55 },
      { x: 3, y: 50 },
      { x: 4, y: 65 },
      { x: 5, y: 92 }
    ]
  }]
};`,
        chartOptions: {
          theme: 'dark2',
          animationEnabled: true,
          title: {
            text: 'Themed Chart (Dark)',
          },
          data: [
            {
              type: 'line',
              dataPoints: [
                { x: 1, y: 71 },
                { x: 2, y: 55 },
                { x: 3, y: 50 },
                { x: 4, y: 65 },
                { x: 5, y: 92 },
              ],
            },
          ],
        },
      },
      {
        title: 'Step 2: Adding Legends',
        explanation: 'Legends help users understand what each data series represents. You can customize legend position, cursor style, and associate series with legend entries using showInLegend and legendText properties.',
        codeSnippet: `const options = {
  animationEnabled: true,
  title: {
    text: "Sales Comparison"
  },
  legend: {
    cursor: "pointer",
    verticalAlign: "top",
    horizontalAlign: "center",
    fontSize: 14
  },
  data: [
    {
      type: "column",
      name: "2024",
      showInLegend: true,
      legendText: "Year 2024",
      dataPoints: [
        { label: "Q1", y: 45 },
        { label: "Q2", y: 55 },
        { label: "Q3", y: 60 },
        { label: "Q4", y: 70 }
      ]
    },
    {
      type: "column",
      name: "2025",
      showInLegend: true,
      legendText: "Year 2025",
      dataPoints: [
        { label: "Q1", y: 50 },
        { label: "Q2", y: 65 },
        { label: "Q3", y: 72 },
        { label: "Q4", y: 85 }
      ]
    }
  ]
};`,
        chartOptions: {
          animationEnabled: true,
          title: {
            text: 'Sales Comparison',
          },
          legend: {
            cursor: 'pointer',
            verticalAlign: 'top',
            horizontalAlign: 'center',
            fontSize: 14,
          },
          data: [
            {
              type: 'column',
              name: '2024',
              showInLegend: true,
              legendText: 'Year 2024',
              dataPoints: [
                { label: 'Q1', y: 45 },
                { label: 'Q2', y: 55 },
                { label: 'Q3', y: 60 },
                { label: 'Q4', y: 70 },
              ],
            },
            {
              type: 'column',
              name: '2025',
              showInLegend: true,
              legendText: 'Year 2025',
              dataPoints: [
                { label: 'Q1', y: 50 },
                { label: 'Q2', y: 65 },
                { label: 'Q3', y: 72 },
                { label: 'Q4', y: 85 },
              ],
            },
          ],
        },
      },
      {
        title: 'Step 3: Customizing Axes',
        explanation: 'Axis customization allows you to add titles, format values, control grid lines, and set intervals. You can add prefixes/suffixes to axis labels for better data representation.',
        codeSnippet: `const options = {
  animationEnabled: true,
  title: {
    text: "Revenue Analysis"
  },
  axisX: {
    title: "Quarter",
    interval: 1,
    labelAngle: -45
  },
  axisY: {
    title: "Revenue",
    prefix: "$",
    suffix: "K",
    includeZero: true,
    gridThickness: 1
  },
  data: [{
    type: "area",
    color: "#6366f1",
    dataPoints: [
      { label: "Q1 2024", y: 120 },
      { label: "Q2 2024", y: 145 },
      { label: "Q3 2024", y: 180 },
      { label: "Q4 2024", y: 210 },
      { label: "Q1 2025", y: 235 }
    ]
  }]
};`,
        chartOptions: {
          animationEnabled: true,
          title: {
            text: 'Revenue Analysis',
          },
          axisX: {
            title: 'Quarter',
            interval: 1,
            labelAngle: -45,
          },
          axisY: {
            title: 'Revenue',
            prefix: '$',
            suffix: 'K',
            includeZero: true,
            gridThickness: 1,
          },
          data: [
            {
              type: 'area',
              color: '#6366f1',
              dataPoints: [
                { label: 'Q1 2024', y: 120 },
                { label: 'Q2 2024', y: 145 },
                { label: 'Q3 2024', y: 180 },
                { label: 'Q4 2024', y: 210 },
                { label: 'Q1 2025', y: 235 },
              ],
            },
          ],
        },
      },
      {
        title: 'Step 4: Custom Colors',
        explanation: 'You can customize individual data series colors and even set different colors for specific data points. This is useful for highlighting specific values or maintaining brand consistency.',
        codeSnippet: `const options = {
  animationEnabled: true,
  title: {
    text: "Performance Metrics"
  },
  data: [{
    type: "column",
    dataPoints: [
      { label: "Excellent", y: 85, color: "#22c55e" },
      { label: "Good", y: 65, color: "#3b82f6" },
      { label: "Average", y: 45, color: "#f59e0b" },
      { label: "Poor", y: 25, color: "#ef4444" }
    ]
  }]
};`,
        chartOptions: {
          animationEnabled: true,
          title: {
            text: 'Performance Metrics',
          },
          data: [
            {
              type: 'column',
              dataPoints: [
                { label: 'Excellent', y: 85, color: '#22c55e' },
                { label: 'Good', y: 65, color: '#3b82f6' },
                { label: 'Average', y: 45, color: '#f59e0b' },
                { label: 'Poor', y: 25, color: '#ef4444' },
              ],
            },
          ],
        },
      },
    ],
  },
];

export const getTutorialById = (id: string): Tutorial | undefined => {
  return tutorials.find((tutorial) => tutorial.id === id);
};

export const getTutorialsByDifficulty = (difficulty: Tutorial['difficulty']): Tutorial[] => {
  return tutorials.filter((tutorial) => tutorial.difficulty === difficulty);
};
