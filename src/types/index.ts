export interface ChartExample {
  id: string;
  title: string;
  description: string;
  type: 'line' | 'bar' | 'pie' | 'area';
}

export interface Tutorial {
  id: string;
  title: string;
  explanation: string;
  codeSnippet: string;
  chartType: 'line' | 'bar' | 'pie';
}

export interface DataPoint {
  label?: string;
  y: number;
  x?: number | Date;
}

export interface ChartDataSeries {
  type: string;
  name?: string;
  dataPoints: DataPoint[];
  showInLegend?: boolean;
  legendText?: string;
}
