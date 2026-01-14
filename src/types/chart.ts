export interface DataPoint {
  label?: string;
  y: number;
}

export type SeriesType = 'line' | 'column' | 'pie' | 'area';

export interface ChartSeries {
  type: SeriesType;
  name?: string;
  showInLegend?: boolean;
  legendText?: string;
   color?: string;
  dataPoints: DataPoint[];
}

export interface AxisOptions {
  title?: string;
  valueFormatString?: string;
  suffix?: string;
  prefix?: string;
}

export interface ChartOptions {
  animationEnabled?: boolean;
  theme?: 'light1' | 'light2' | 'dark1' | 'dark2';
  backgroundColor?: string;
  title?: { text: string };
  axisX?: AxisOptions;
  axisY?: AxisOptions;
  data: ChartSeries[];
}
