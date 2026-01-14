import type { ChartExample } from '../types';

export const chartExamples: ChartExample[] = [
  {
    id: 'line-chart-basic',
    title: 'Basic Line Chart',
    description: 'A simple line chart showing monthly website visitors over a year. Line charts are perfect for displaying trends over time.',
    category: 'line',
    chartOptions: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2',
      title: {
        text: 'Monthly Website Visitors',
        fontSize: 20,
      },
      axisX: {
        title: 'Month',
        interval: 1,
      },
      axisY: {
        title: 'Visitors (thousands)',
        includeZero: true,
        suffix: 'K',
      },
      data: [
        {
          type: 'line',
          name: 'Visitors',
          showInLegend: true,
          markerType: 'circle',
          markerSize: 8,
          lineThickness: 3,
          dataPoints: [
            { x: 1, y: 64, label: 'Jan' },
            { x: 2, y: 61, label: 'Feb' },
            { x: 3, y: 75, label: 'Mar' },
            { x: 4, y: 85, label: 'Apr' },
            { x: 5, y: 95, label: 'May' },
            { x: 6, y: 110, label: 'Jun' },
            { x: 7, y: 125, label: 'Jul' },
            { x: 8, y: 130, label: 'Aug' },
            { x: 9, y: 115, label: 'Sep' },
            { x: 10, y: 105, label: 'Oct' },
            { x: 11, y: 90, label: 'Nov' },
            { x: 12, y: 95, label: 'Dec' },
          ],
        },
      ],
    },
  },
  {
    id: 'bar-chart-basic',
    title: 'Basic Bar Chart',
    description: 'A column/bar chart comparing quarterly sales across different product categories. Bar charts are ideal for comparing discrete categories.',
    category: 'bar',
    chartOptions: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2',
      title: {
        text: 'Quarterly Sales by Product Category',
        fontSize: 20,
      },
      axisX: {
        title: 'Product Category',
      },
      axisY: {
        title: 'Sales (USD)',
        includeZero: true,
        prefix: '$',
      },
      legend: {
        cursor: 'pointer',
        verticalAlign: 'top',
        horizontalAlign: 'center',
      },
      data: [
        {
          type: 'column',
          name: 'Q1',
          showInLegend: true,
          dataPoints: [
            { label: 'Electronics', y: 45000 },
            { label: 'Clothing', y: 28000 },
            { label: 'Books', y: 15000 },
            { label: 'Home & Garden', y: 32000 },
          ],
        },
        {
          type: 'column',
          name: 'Q2',
          showInLegend: true,
          dataPoints: [
            { label: 'Electronics', y: 52000 },
            { label: 'Clothing', y: 35000 },
            { label: 'Books', y: 18000 },
            { label: 'Home & Garden', y: 41000 },
          ],
        },
      ],
    },
  },
  {
    id: 'pie-chart-basic',
    title: 'Basic Pie Chart',
    description: 'A pie chart showing market share distribution among top tech companies. Pie charts are great for showing proportions of a whole.',
    category: 'pie',
    chartOptions: {
      animationEnabled: true,
      exportEnabled: true,
      theme: 'light2',
      title: {
        text: 'Market Share Distribution',
        fontSize: 20,
      },
      legend: {
        cursor: 'pointer',
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
      },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          indexLabelPlacement: 'inside',
          indexLabelFontColor: 'white',
          indexLabelFontSize: 14,
          startAngle: 240,
          dataPoints: [
            { y: 35, name: 'Company A', legendText: 'Company A (35%)', indexLabel: '35%' },
            { y: 25, name: 'Company B', legendText: 'Company B (25%)', indexLabel: '25%' },
            { y: 20, name: 'Company C', legendText: 'Company C (20%)', indexLabel: '20%' },
            { y: 12, name: 'Company D', legendText: 'Company D (12%)', indexLabel: '12%' },
            { y: 8, name: 'Others', legendText: 'Others (8%)', indexLabel: '8%' },
          ],
        },
      ],
    },
  },
];

export const getExampleById = (id: string): ChartExample | undefined => {
  return chartExamples.find((example) => example.id === id);
};

export const getExamplesByCategory = (category: ChartExample['category']): ChartExample[] => {
  return chartExamples.filter((example) => example.category === category);
};
