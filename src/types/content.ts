import { ChartOptions } from './chart';

export interface NavItem {
  label: string;
  path: string;
}

export interface DocSection {
  id: string;
  title: string;
  description: string;
  bullets?: string[];
}

export interface ChartExample {
  id: string;
  title: string;
  description: string;
  options: ChartOptions;
}

export interface TutorialStep {
  id: string;
  title: string;
  summary: string;
  code: string;
  options: ChartOptions;
}

export interface FeatureHighlight {
  title: string;
  description: string;
  icon: string;
}
