import { Link } from 'react-router-dom';
import { useActivePath } from '../hooks/useActivePath';
import { classNames } from '../utils/classNames';
import { NavItem } from '../types/content';

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Documentation', path: '/docs' },
  { label: 'Examples', path: '/examples' },
  { label: 'Tutorials', path: '/tutorials' }
];

export const Navbar = () => {
  const activePath = useActivePath();

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-slate-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" aria-hidden="true" />
          <div>
            <p className="font-display text-lg font-semibold">CanvasJS Learning Hub</p>
            <p className="text-xs text-slate-300">Docs · Examples · Tutorials</p>
          </div>
        </Link>
        <div className="flex items-center gap-4 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={classNames(
                'rounded-full px-4 py-2 transition-colors duration-200',
                activePath === item.path
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-200 hover:bg-white/10 hover:text-white'
              )}
              aria-current={activePath === item.path ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
