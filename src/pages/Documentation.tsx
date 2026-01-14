import { docSections } from '../data/docs';

export const Documentation = () => (
  <main className="mx-auto max-w-5xl px-6 py-12">
    <header className="mb-10 space-y-3">
      <p className="text-sm uppercase tracking-wide text-blue-200">Documentation</p>
      <h1 className="text-3xl font-semibold text-white">Learn CanvasJS fundamentals</h1>
      <p className="text-slate-300">
        Understand how CanvasJS structures charts, how to install it, and which properties you will use most often.
      </p>
    </header>

    <div className="space-y-6">
      {docSections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 shadow-lg shadow-slate-900/60"
        >
          <h2 className="text-xl font-semibold text-white">{section.title}</h2>
          <p className="mt-2 text-sm text-slate-200">{section.description}</p>
          {section.bullets && (
            <ul className="mt-3 grid gap-2 md:grid-cols-2">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  </main>
);

export default Documentation;
