import { tutorials } from '../data/tutorials';
import { TutorialCard } from '../components/TutorialCard';

export const Tutorials = () => (
  <main className="mx-auto max-w-6xl px-6 py-12">
    <header className="mb-10 space-y-3">
      <p className="text-sm uppercase tracking-wide text-blue-200">Tutorials</p>
      <h1 className="text-3xl font-semibold text-white">Step-by-step learning</h1>
      <p className="text-slate-300">
        Follow these guided examples to go from first render to polished charts with thoughtful customization.
      </p>
    </header>

    <div className="space-y-6">
      {tutorials.map((tutorial) => (
        <TutorialCard key={tutorial.id} tutorial={tutorial} />
      ))}
    </div>
  </main>
);

export default Tutorials;
