import { ChartExample } from '../types/content';

export const chartExamples: ChartExample[] = [
  {
    id: 'line-chart',
    title: 'Line Chart - Monthly Traffic',
    description: 'Demonstrates a smooth line chart for monthly visitor growth with hover tooltips and animation.',
    options: {
      animationEnabled: true,
      theme: 'dark1',
      title: { text: 'Monthly Traffic' },
      axisX: { title: 'Month' },
      axisY: { title: 'Visits', suffix: 'k' },
      data: [
        {
          type: 'line',
          dataPoints: [
            { label: 'Jan', y: 22 },
            { label: 'Feb', y: 25 },
            { label: 'Mar', y: 30 },
            { label: 'Apr', y: 28 },
            { label: 'May', y: 35 },
            { label: 'Jun', y: 40 },
            { label: 'Jul', y: 44 },
            { label: 'Aug', y: 48 }
          ]
        }
      ]
    }
  },
  {
    id: 'bar-chart',
    title: 'Bar Chart - Framework Popularity',
    description: 'Simple bar chart comparing framework usage share across a sample survey.',
    options: {
      animationEnabled: true,
      theme: 'dark1',
      title: { text: 'Framework Popularity' },
      axisX: { title: 'Framework' },
      axisY: { title: 'Developers', suffix: 'k' },
      data: [
        {
          type: 'column',
          dataPoints: [
            { label: 'React', y: 62 },
            { label: 'Vue', y: 32 },
            { label: 'Angular', y: 28 },
            { label: 'Svelte', y: 18 }
          ]
        }
      ]
    }
  },
  {
    id: 'pie-chart',
    title: 'Pie Chart - Traffic Sources',
    description: 'Pie chart showcasing composition of traffic sources with legend labels.',
    options: {
      animationEnabled: true,
      theme: 'dark1',
      title: { text: 'Traffic Sources' },
      data: [
        {
          type: 'pie',
          showInLegend: true,
          dataPoints: [
            { label: 'Organic', y: 42 },
            { label: 'Paid', y: 25 },
            { label: 'Referral', y: 18 },
            { label: 'Social', y: 15 }
          ]
        }
      ]
    }
  }
];
