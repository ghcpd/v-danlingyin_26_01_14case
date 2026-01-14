import { ChartExample } from '@/types';

export const chartExamples: ChartExample[] = [
  {
    id: 'line-chart',
    title: 'Line Chart Example',
    description: 'A smooth line chart showing data trends over time. Perfect for visualizing continuous data like temperature, stock prices, or website traffic.',
    type: 'line',
  },
  {
    id: 'bar-chart',
    title: 'Bar Chart Example',
    description: 'A vertical bar chart comparing different categories. Ideal for showing comparisons between discrete items like sales by region or product categories.',
    type: 'bar',
  },
  {
    id: 'pie-chart',
    title: 'Pie Chart Example',
    description: 'A circular chart showing proportional data. Best used for displaying percentage distributions and parts of a whole.',
    type: 'pie',
  },
];

export const lineChartData = [
  {
    type: 'line',
    dataPoints: [
      { x: new Date(2024, 0, 1), y: 450 },
      { x: new Date(2024, 1, 1), y: 520 },
      { x: new Date(2024, 2, 1), y: 580 },
      { x: new Date(2024, 3, 1), y: 590 },
      { x: new Date(2024, 4, 1), y: 650 },
      { x: new Date(2024, 5, 1), y: 720 },
      { x: new Date(2024, 6, 1), y: 800 },
      { x: new Date(2024, 7, 1), y: 780 },
      { x: new Date(2024, 8, 1), y: 850 },
      { x: new Date(2024, 9, 1), y: 920 },
      { x: new Date(2024, 10, 1), y: 980 },
      { x: new Date(2024, 11, 1), y: 1050 },
    ],
  },
];

export const barChartData = [
  {
    type: 'column',
    dataPoints: [
      { label: 'Q1', y: 1200 },
      { label: 'Q2', y: 1850 },
      { label: 'Q3', y: 2100 },
      { label: 'Q4', y: 2400 },
    ],
  },
];

export const pieChartData = [
  {
    type: 'pie',
    showInLegend: true,
    legendText: '{label}',
    dataPoints: [
      { label: 'Line Charts', y: 35 },
      { label: 'Bar Charts', y: 28 },
      { label: 'Pie Charts', y: 18 },
      { label: 'Area Charts', y: 12 },
      { label: 'Other Charts', y: 7 },
    ],
  },
];
