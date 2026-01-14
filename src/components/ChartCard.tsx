import { ChartExample } from '../types/content';
import { CanvasChart } from '../charts/CanvasChart';

interface ChartCardProps {
  example: ChartExample;
}

export const ChartCard = ({ example }: ChartCardProps) => (
  <article className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60">
    <div className="flex items-start justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold text-white">{example.title}</h3>
        <p className="text-sm text-slate-300">{example.description}</p>
      </div>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">Live</span>
    </div>
    <div className="overflow-hidden rounded-xl bg-slate-950/70">
      <CanvasChart options={example.options} />
    </div>
  </article>
);
