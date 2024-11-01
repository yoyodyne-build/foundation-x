import { type Meta, type StoryObj } from '@storybook/react';

import Button from './Button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    size: 'md',
    variant: 'primary',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    size: { control: 'select' },
    variant: { control: 'select' },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};
