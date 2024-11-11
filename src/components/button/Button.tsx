import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { clsxMerge } from '../../common/utils/classNameUtils';
import {
  type ButtonBaseProps,
  type ButtonSize,
  ButtonStyles,
  type ButtonType,
  type ButtonVariant,
} from './ButtonStyles';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonBaseProps {
  /** Optional button type (ie. 'button', 'submit', or 'reset'. */
  type?: ButtonType;
  /** Optional left icon */
  leftIcon?: ReactNode;
  /** Optional right icon */
  rightIcon?: ReactNode;
  /** Button contents */
  label: string;
  /** Optional button variant */
  variant?: ButtonVariant;
  /** Optional button size */
  size?: ButtonSize;
}

/** Primary UI component for user interaction */
export const Button: FC<ButtonProps> = ({
  className,
  type = 'button',
  variant,
  size,
  label,
  rightIcon,
  leftIcon,
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsxMerge(ButtonStyles({ variant, size }), className)}
      {...props}
    >
      {Boolean(leftIcon) && leftIcon}
      {label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
};

export default Button;
