import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface BarChartProps {
  data: Array<{
    type: string;
    dataPoints: Array<{ label: string; y: number }>;
  }>;
  title?: string;
}

export default function BarChart({ data, title = 'Bar Chart' }: BarChartProps) {
  const options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: title,
      fontSize: 20,
    },
    axisY: {
      title: 'Values',
      includeZero: true,
    },
    data: data,
  };

  return (
    <div className="w-full">
      <CanvasJSChart options={options} />
    </div>
  );
}
