import React from 'react';
interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large';
  variant?: 'primary' | 'secondary';
}
export function CTAButton({
  children,
  onClick,
  className = '',
  size = 'default',
  variant = 'primary'
}: CTAButtonProps) {
  const baseStyles =
  'font-heading font-bold rounded-lg transition-all duration-300 glow-yellow-hover';
  const sizeStyles = {
    default: 'px-8 py-3 text-base',
    large: 'px-10 py-4 text-lg'
  };
  const variantStyles = {
    primary: 'bg-nutyre-yellow text-[#000000] hover:bg-yellow-300',
    secondary:
    'bg-transparent border-2 border-nutyre-yellow text-nutyre-yellow hover:bg-nutyre-yellow hover:text-nutyre-bg'
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={
      typeof children === 'string' ? children : 'Call to action button'
      }>

      {children}
    </button>);

}