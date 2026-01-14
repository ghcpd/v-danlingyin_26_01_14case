/// <reference types="vite/client" />

declare module '@canvasjs/react-charts' {
  import { Component } from 'react';

  interface CanvasJSChartProps {
    options: Record<string, unknown>;
    onRef?: (ref: unknown) => void;
    containerProps?: Record<string, unknown>;
  }

  export class CanvasJSChart extends Component<CanvasJSChartProps> {}

  const CanvasJSReact: {
    CanvasJSChart: typeof CanvasJSChart;
    CanvasJS: unknown;
  };

  export default CanvasJSReact;
}
