import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const DocumentationPage = lazy(() => import('./pages/DocumentationPage'));
const ExamplesPage = lazy(() => import('./pages/ExamplesPage'));
const TutorialsPage = lazy(() => import('./pages/TutorialsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-500">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/examples" element={<ExamplesPage />} />
          <Route path="/tutorials" element={<TutorialsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
