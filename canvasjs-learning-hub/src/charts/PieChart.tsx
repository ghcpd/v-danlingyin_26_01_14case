import type { ChartOptions } from '../types';
import { ChartWrapper } from './ChartWrapper';

interface PieChartProps {
  title?: string;
  dataPoints: Array<{ y: number; name: string; color?: string }>;
  theme?: ChartOptions['theme'];
  height?: number;
  showLabels?: boolean;
  doughnut?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({
  title = 'Pie Chart',
  dataPoints,
  theme = 'light2',
  height = 300,
  showLabels = true,
  doughnut = false,
}) => {
  const formattedDataPoints = dataPoints.map((dp) => ({
    ...dp,
    legendText: dp.name,
    indexLabel: showLabels ? `${dp.name}` : undefined,
  }));

  const options: ChartOptions = {
    animationEnabled: true,
    exportEnabled: true,
    theme,
    height,
    title: {
      text: title,
      fontSize: 18,
    },
    legend: {
      cursor: 'pointer',
      verticalAlign: 'bottom',
      horizontalAlign: 'center',
    },
    data: [
      {
        type: doughnut ? 'doughnut' : 'pie',
        showInLegend: true,
        startAngle: 240,
        indexLabelPlacement: 'outside',
        dataPoints: formattedDataPoints,
      },
    ],
  };

  return <ChartWrapper options={options} />;
};

export default PieChart;
