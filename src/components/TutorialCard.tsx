import { CanvasChart } from '../charts/CanvasChart';
import { TutorialStep } from '../types/content';

interface TutorialCardProps {
  tutorial: TutorialStep;
}

export const TutorialCard = ({ tutorial }: TutorialCardProps) => (
  <article className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60 md:grid-cols-2">
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-white">{tutorial.title}</h3>
      <p className="text-sm text-slate-300">{tutorial.summary}</p>
      <pre className="max-h-64 overflow-auto rounded-xl bg-slate-950/80 p-4 text-xs text-slate-100">
        <code>{tutorial.code}</code>
      </pre>
    </div>
    <div className="rounded-xl bg-slate-950/70 p-3">
      <CanvasChart options={tutorial.options} />
    </div>
  </article>
);
