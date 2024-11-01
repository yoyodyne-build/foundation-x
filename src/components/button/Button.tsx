import type { FC, ReactNode } from 'react';

import { clsxMerge } from '../../common/utils/classNameUtils';
import {
  type ButtonBaseProps,
  ButtonStyles,
  type ButtonType,
} from './ButtonStyles';

export interface ButtonProps extends ButtonBaseProps {
  type?: ButtonType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  label?: string;
}

const Button: FC<ButtonProps> = ({
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
      {...props}>
      {Boolean(leftIcon) && leftIcon}
      {Boolean(label) && label}
      {Boolean(rightIcon) && rightIcon}
    </button>
  );
};

export default Button;
