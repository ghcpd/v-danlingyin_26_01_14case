import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { highlights } from '../data/home';
import { ChartOptions } from '../types/chart';
import { CanvasChart } from '../charts/CanvasChart';

const heroChartOptions: ChartOptions = {
  animationEnabled: true,
  backgroundColor: 'transparent',
  axisX: { labelFontColor: '#cbd5f5' },
  axisY: { labelFontColor: '#cbd5f5', suffix: 'k' },
  data: [
    {
      type: 'area',
      color: '#38bdf8',
      dataPoints: [
        { label: 'Mon', y: 12 },
        { label: 'Tue', y: 18 },
        { label: 'Wed', y: 15 },
        { label: 'Thu', y: 22 },
        { label: 'Fri', y: 28 },
        { label: 'Sat', y: 25 },
        { label: 'Sun', y: 30 }
      ]
    }
  ]
};

export const Home = () => (
  <div className="relative isolate overflow-hidden">
    <AnimatedBackground />
    <section className="hero-grid mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative z-10 max-w-xl space-y-6">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-100"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          CanvasJS Learning Hub
        </motion.p>
        <motion.h1
          className="font-display text-4xl font-bold leading-tight text-white md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Build charts faster with concise docs, live examples, and guided tutorials.
        </motion.h1>
        <motion.p
          className="text-lg text-slate-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Explore official-style documentation, production-ready chart patterns, and hands-on tutorials designed for developers shipping CanvasJS visualizations.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <Link
            to="/docs"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:shadow-blue-400/40"
          >
            View Documentation
          </Link>
          <Link
            to="/examples"
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/60"
          >
            Explore Examples
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-900/50"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <p className="mb-2 text-sm text-slate-300">Animated chart preview</p>
        <div className="overflow-hidden rounded-2xl bg-slate-950/80 p-2 animate-float">
          <CanvasChart options={heroChartOptions} />
        </div>
      </motion.div>
    </section>

    <section className="mx-auto max-w-6xl px-6 pb-16">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm uppercase tracking-wide text-blue-200">Why CanvasJS</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Curated resources for developers</h2>
        </div>
        <Link to="/tutorials" className="text-sm font-semibold text-blue-300 hover:text-blue-200">
          Start tutorials →
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60 transition hover:-translate-y-1 hover:border-blue-300/40"
          >
            <div className="mb-3 text-2xl" aria-hidden="true">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Home;
