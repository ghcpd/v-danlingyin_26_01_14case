import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Documentation from '@/pages/Documentation';
import Examples from '@/pages/Examples';
import Tutorials from '@/pages/Tutorials';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/examples" element={<Examples />} />
          <Route path="/tutorials" element={<Tutorials />} />
        </Routes>
      </Layout>
    </Router>
  );
}
