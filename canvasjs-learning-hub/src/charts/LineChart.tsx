import type { ChartOptions } from '../types';
import { ChartWrapper } from './ChartWrapper';

interface LineChartProps {
  title?: string;
  dataPoints: Array<{ x?: number; y: number; label?: string }>;
  seriesName?: string;
  showMarkers?: boolean;
  theme?: ChartOptions['theme'];
  height?: number;
}

export const LineChart: React.FC<LineChartProps> = ({
  title = 'Line Chart',
  dataPoints,
  seriesName = 'Data',
  showMarkers = true,
  theme = 'light2',
  height = 300,
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
      includeZero: false,
    },
    data: [
      {
        type: 'line',
        name: seriesName,
        showInLegend: true,
        markerType: showMarkers ? 'circle' : 'none',
        markerSize: showMarkers ? 8 : 0,
        lineThickness: 2,
        dataPoints,
      },
    ],
  };

  return <ChartWrapper options={options} />;
};

export default LineChart;
