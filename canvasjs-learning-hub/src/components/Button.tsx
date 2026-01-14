import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { classNames } from '../utils/helpers';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

interface ButtonAsLinkProps extends ButtonBaseProps {
  as: 'link';
  to: string;
}

interface ButtonAsAnchorProps extends ButtonBaseProps {
  as: 'anchor';
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps | ButtonAsAnchorProps;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm',
  secondary:
    'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
  outline:
    'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  ghost:
    'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

export const Button: React.FC<ButtonProps> = (props) => {
  const {
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    children,
    leftIcon,
    rightIcon,
  } = props;

  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const combinedClassName = classNames(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  const content = (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  if (props.as === 'link') {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link to={props.to} className={combinedClassName}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (props.as === 'anchor') {
    return (
      <motion.a
        href={props.href}
        target={props.target}
        rel={props.rel}
        className={combinedClassName}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  const buttonProps = props as ButtonAsButtonProps;
  
  return (
    <motion.button
      type={buttonProps.type || 'button'}
      onClick={buttonProps.onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};

export default Button;
