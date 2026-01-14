export interface ChartDataPoint {
  x?: number;
  y: number;
  label?: string;
  name?: string;
  indexLabel?: string;
  legendText?: string;
  color?: string;
}

export interface ChartDataSeries {
  type: 'line' | 'bar' | 'column' | 'pie' | 'area' | 'spline' | 'doughnut';
  name?: string;
  showInLegend?: boolean;
  legendText?: string;
  dataPoints: ChartDataPoint[];
  color?: string;
  markerType?: string;
  markerSize?: number;
  lineThickness?: number;
  indexLabelPlacement?: string;
  indexLabelFontColor?: string;
  indexLabelFontSize?: number;
  startAngle?: number;
}

export interface ChartTitle {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: string;
  fontColor?: string;
  padding?: number;
}

export interface ChartAxisX {
  title?: string;
  interval?: number;
  labelAngle?: number;
  gridThickness?: number;
  valueFormatString?: string;
}

export interface ChartAxisY {
  title?: string;
  includeZero?: boolean;
  suffix?: string;
  prefix?: string;
  gridThickness?: number;
  valueFormatString?: string;
}

export interface ChartLegend {
  cursor?: string;
  verticalAlign?: 'top' | 'center' | 'bottom';
  horizontalAlign?: 'left' | 'center' | 'right';
  fontSize?: number;
}

export interface ChartOptions {
  animationEnabled?: boolean;
  exportEnabled?: boolean;
  theme?: 'light1' | 'light2' | 'dark1' | 'dark2';
  title?: ChartTitle;
  subtitles?: ChartTitle[];
  axisX?: ChartAxisX;
  axisY?: ChartAxisY;
  legend?: ChartLegend;
  data: ChartDataSeries[];
  width?: number;
  height?: number;
  backgroundColor?: string;
  colorSet?: string[];
}

export interface ChartExample {
  id: string;
  title: string;
  description: string;
  chartOptions: ChartOptions;
  category: 'line' | 'bar' | 'pie' | 'area' | 'multi';
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  steps: TutorialStep[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface TutorialStep {
  title: string;
  explanation: string;
  codeSnippet: string;
  chartOptions?: ChartOptions;
}

export interface DocSection {
  id: string;
  title: string;
  content: string;
  subsections?: DocSubsection[];
}

export interface DocSubsection {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
}

export interface NavItem {
  label: string;
  path: string;
  icon?: string;
}
