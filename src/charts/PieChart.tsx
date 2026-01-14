import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface PieChartProps {
  data: Array<{
    type: string;
    showInLegend?: boolean;
    legendText?: string;
    dataPoints: Array<{ label: string; y: number }>;
  }>;
  title?: string;
}

export default function PieChart({ data, title = 'Pie Chart' }: PieChartProps) {
  const options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: title,
      fontSize: 20,
    },
    data: data,
  };

  return (
    <div className="w-full">
      <CanvasJSChart options={options} />
    </div>
  );
}
