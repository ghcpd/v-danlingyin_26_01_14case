import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Documentation = lazy(() => import('./pages/Documentation'));
const Examples = lazy(() => import('./pages/Examples'));
const Tutorials = lazy(() => import('./pages/Tutorials'));

const Loader = () => (
  <div className="flex h-64 items-center justify-center text-slate-200">Loading…</div>
);

const App = () => (
  <div className="min-h-screen bg-slate-950">
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="/examples" element={<Examples />} />
        <Route path="/tutorials" element={<Tutorials />} />
      </Routes>
    </Suspense>
    <Footer />
  </div>
);

export default App;
