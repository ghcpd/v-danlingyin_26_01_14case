import { chartExamples } from '../data/examples';
import { ChartCard } from '../components/ChartCard';

export const Examples = () => (
  <main className="mx-auto max-w-6xl px-6 py-12">
    <header className="mb-10 space-y-3">
      <p className="text-sm uppercase tracking-wide text-blue-200">Examples</p>
      <h1 className="text-3xl font-semibold text-white">Interactive CanvasJS examples</h1>
      <p className="text-slate-300">
        Study live charts for core visualization patterns. Each example includes configuration you can adapt to your own data.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      {chartExamples.map((example) => (
        <ChartCard key={example.id} example={example} />
      ))}
    </div>
  </main>
);

export default Examples;
