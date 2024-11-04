import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
    disabled: false,
    size: 'md',
    variant: 'primary',
    onClick: fn(),
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: { control: 'select' },
    variant: { control: 'select' },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const PrimaryOutline: Story = {
  args: {
    label: 'Outline Button',
    disabled: false,
    variant: 'primary-outline',
    type: 'button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: 'secondary-outline',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
