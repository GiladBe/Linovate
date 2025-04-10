import React from 'react';
import clsx from 'clsx';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'white' | 'blue';
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'gray',
  className = '',
}) => {
  const spinnerSize = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8',
  };

  const spinnerColor = {
    gray: 'text-gray-500',
    white: 'text-white',
    blue: 'text-blue-500',
  };

  return (
    <svg
      className={clsx('animate-spin', spinnerSize[size], spinnerColor[color], className)}
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant ,
  loading = false,
  disabled,
  children,
  className = '',
  onClick,
  ...props
}) => {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary';

  return (
    <button
      {...props}
      disabled={disabled || loading}
      onClick={onClick}
      className={clsx(
        baseClass,
        'flex items-center justify-center gap-2',
        { 'opacity-70 cursor-not-allowed': loading || disabled },
        className
      )}
    >
      {loading && <Spinner size="sm" color="white" />}
      {children}
    </button>
  );
};
