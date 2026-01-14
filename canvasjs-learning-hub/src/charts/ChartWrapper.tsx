import { useEffect, useRef } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import type { ChartOptions } from '../types';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface ChartWrapperProps {
  options: ChartOptions;
  containerClassName?: string;
  onRef?: (chart: unknown) => void;
}

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  options,
  containerClassName = '',
  onRef,
}) => {
  const chartRef = useRef<unknown>(null);

  useEffect(() => {
    if (chartRef.current && onRef) {
      onRef(chartRef.current);
    }
  }, [onRef]);

  const mergedOptions = {
    ...options,
    animationEnabled: options.animationEnabled ?? true,
  };

  return (
    <div className={`chart-container ${containerClassName}`}>
      <CanvasJSChart
        options={mergedOptions}
        onRef={(ref: unknown) => {
          chartRef.current = ref;
        }}
      />
    </div>
  );
};

export default ChartWrapper;
