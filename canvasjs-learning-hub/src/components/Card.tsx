import { motion } from 'framer-motion';
import { classNames } from '../utils/helpers';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  onClick,
}) => {
  const baseClasses = 'bg-white rounded-xl shadow-md overflow-hidden';
  const hoverClasses = hoverable
    ? 'cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
    : '';

  return (
    <motion.div
      className={classNames(baseClasses, hoverClasses, className)}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {children}
    </motion.div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => (
  <div className={classNames('px-6 py-4 border-b border-gray-100', className)}>
    {children}
  </div>
);

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => (
  <div className={classNames('px-6 py-4', className)}>{children}</div>
);

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => (
  <div className={classNames('px-6 py-4 bg-gray-50 border-t border-gray-100', className)}>
    {children}
  </div>
);

export default Card;
