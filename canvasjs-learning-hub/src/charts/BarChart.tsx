import type { ChartOptions } from '../types';
import { ChartWrapper } from './ChartWrapper';

interface BarChartProps {
  title?: string;
  dataPoints: Array<{ label: string; y: number; color?: string }>;
  seriesName?: string;
  theme?: ChartOptions['theme'];
  height?: number;
  horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({
  title = 'Bar Chart',
  dataPoints,
  seriesName = 'Data',
  theme = 'light2',
  height = 300,
  horizontal = false,
}) => {
  const options: ChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme,
    height,
    title: {
      text: title,
      fontSize: 18,
    },
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: horizontal ? 'bar' : 'column',
        name: seriesName,
        showInLegend: true,
        dataPoints,
      },
    ],
  };

  return <ChartWrapper options={options} />;
};

export default BarChart;
