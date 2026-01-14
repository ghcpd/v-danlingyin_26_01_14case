import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-canvasjs-blue to-canvasjs-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CJ</span>
              </div>
              <span className="font-bold text-xl text-white">CanvasJS Hub</span>
            </div>
            <p className="text-sm text-gray-400">
              A developer-focused knowledge library for learning CanvasJS charting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/documentation" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  to="/examples" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link 
                  to="/tutorials" 
                  className="text-sm hover:text-white transition-colors"
                >
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  Official CanvasJS Docs
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nickytonline/canvasjs-react-charts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} CanvasJS Learning Hub. Built for educational purposes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
