export const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="gradient-orb animate-pulseGlow bg-blue-500/40" style={{ top: '-60px', left: '-40px' }} />
    <div className="gradient-orb animate-pulseGlow bg-cyan-400/40" style={{ bottom: '-80px', right: '-60px' }} />
    <div className="gradient-orb animate-float bg-indigo-500/30" style={{ top: '30%', left: '50%' }} />
  </div>
);
