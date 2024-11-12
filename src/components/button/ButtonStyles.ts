import { type VariantProps, cva } from 'class-variance-authority';

const variants = {
  primary: 'border-blue-700 bg-blue-700 text-white hover:bg-blue-500',
  'primary-outline': 'border-blue-700 text-blue-700 hover:bg-blue-100',
  secondary:
    'border-gray-500 bg-gray-500 text-white hover:bg-white hover:text-gray-500',
  'secondary-outline': 'border-gray-500 text-gray-500 hover:bg-gray-100',
  success: 'border-green-700 bg-green-700 text-white hover:bg-green-600',
  'success-outline': 'border-green-700 text-green-700 hover:bg-green-100',
  danger: 'border-red-700 bg-red-700 text-white hover:bg-red-500',
  'danger-outline': 'border-red-700 text-red-700 hover:bg-red-100',
  warning:
    'border-yellow-600 bg-yellow-600 text-white hover:bg-yellow-400 hover:text-black',
  'warning-outline': 'border-yellow-600 text-yellow-600 hover:bg-yellow-100',
};

const sizes = {
  sm: 'h-9 px-2 text-sm',
  md: 'h-10 px-3 text-base',
  lg: 'h-12 px-8 text-lg',
};

export const ButtonStyles = cva(
  'flex flex-row items-center justify-center gap-x-4 rounded-md border disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    compoundVariants: [
      {
        variant: 'primary',
        size: 'md',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonBaseProps = VariantProps<typeof ButtonStyles>;
export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonVariant = keyof typeof variants;
export type ButtonSize = keyof typeof sizes;
