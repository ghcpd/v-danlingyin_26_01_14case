import { TutorialStep } from '../types/content';

export const tutorials: TutorialStep[] = [
  {
    id: 'basic-chart',
    title: 'Basic Chart Creation',
    summary: 'Create your first CanvasJS chart by importing CanvasJSChart and passing a minimal options object.',
    code: `import CanvasJSReact from 'canvasjs-react-charts';
const { CanvasJSChart } = CanvasJSReact;

const options = {
  animationEnabled: true,
  title: { text: 'Hello Chart' },
  data: [
    { type: 'line', dataPoints: [ { x: 1, y: 10 }, { x: 2, y: 15 } ] }
  ]
};

export const BasicChart = () => <CanvasJSChart options={options} />;`,
    options: {
      animationEnabled: true,
      theme: 'dark1',
      title: { text: 'Basic Line' },
      axisX: { title: 'X' },
      axisY: { title: 'Y' },
      data: [
        {
          type: 'line',
          dataPoints: [
            { label: 'One', y: 10 },
            { label: 'Two', y: 15 },
            { label: 'Three', y: 18 }
          ]
        }
      ]
    }
  },
  {
    id: 'custom-options',
    title: 'Customizing Chart Options',
    summary: 'Adjust theming, axes, legends, and series types to match product requirements.',
    code: `const options = {
  theme: 'dark2',
  backgroundColor: '#0b1221',
  axisX: { title: 'Quarter', valueFormatString: 'Q#' },
  axisY: { title: 'Revenue', prefix: '$', suffix: 'k' },
  data: [
    {
      type: 'column',
      name: 'Revenue',
      showInLegend: true,
      dataPoints: [
        { label: 'Q1', y: 42 },
        { label: 'Q2', y: 55 },
        { label: 'Q3', y: 61 },
        { label: 'Q4', y: 74 }
      ]
    }
  ]
};`,
    options: {
      animationEnabled: true,
      theme: 'dark2',
      backgroundColor: '#0b1221',
      title: { text: 'Custom Options' },
      axisX: { title: 'Quarter', valueFormatString: 'Q#' },
      axisY: { title: 'Revenue', prefix: '$', suffix: 'k' },
      data: [
        {
          type: 'column',
          showInLegend: true,
          name: 'Revenue',
          dataPoints: [
            { label: 'Q1', y: 42 },
            { label: 'Q2', y: 55 },
            { label: 'Q3', y: 61 },
            { label: 'Q4', y: 74 }
          ]
        }
      ]
    }
  }
];
