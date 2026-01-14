import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface LineChartProps {
  data: Array<{
    type: string;
    dataPoints: Array<{ x: Date; y: number }>;
  }>;
  title?: string;
}

export default function LineChart({ data, title = 'Line Chart' }: LineChartProps) {
  const options = {
    animationEnabled: true,
    theme: 'light2',
    title: {
      text: title,
      fontSize: 20,
    },
    axisX: {
      valueFormatString: 'MMM YYYY',
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
