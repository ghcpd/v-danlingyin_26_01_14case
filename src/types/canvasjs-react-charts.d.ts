declare module 'canvasjs-react-charts' {
  import * as React from 'react';

  export interface CanvasJSChartProps {
    options: object;
    onRef?: (chart: unknown) => void;
  }

  export const CanvasJSChart: React.FC<CanvasJSChartProps>;
  export const CanvasJS: unknown;
}
