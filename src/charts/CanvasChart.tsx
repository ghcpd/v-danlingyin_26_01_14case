import { CanvasJSChart } from 'canvasjs-react-charts';
import { ChartOptions } from '../types/chart';

interface CanvasChartProps {
  options: ChartOptions;
}

export const CanvasChart = ({ options }: CanvasChartProps) => <CanvasJSChart options={options} />;

export default CanvasChart;
