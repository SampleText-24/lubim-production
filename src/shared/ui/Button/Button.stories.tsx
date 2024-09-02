import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme, ButtonSize } from './Button';

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Clear Theme
export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Button',
    },
};

export const ClearWithAnimation: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Clear Button with Animation',
        textAnimation: true,
    },
};

// Outline Theme
export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button',
    },
};

export const OutlineWithAnimation: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Outline Button with Animation',
        textAnimation: true,
    },
};

// Filled Theme
export const Filled: Story = {
    args: {
        theme: ButtonTheme.FILLED,
        children: 'Filled Button',
    },
};

export const FilledWithAnimation: Story = {
    args: {
        theme: ButtonTheme.FILLED,
        children: 'Filled Button with Animation',
        textAnimation: true,
    },
};

// Sizes
export const SmallSize: Story = {
    args: {
        size: ButtonSize.S,
        children: 'Small Button',
    },
};

export const MediumSize: Story = {
    args: {
        size: ButtonSize.M,
        children: 'Medium Button',
    },
};

export const LargeSize: Story = {
    args: {
        size: ButtonSize.L,
        children: 'Large Button',
    },
};

// Disabled state
export const Disabled: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Disabled Button',
        disabled: true,
    },
};

// Full width
export const FullWidth: Story = {
    args: {
        theme: ButtonTheme.FILLED,
        children: 'Full Width Button',
        fullWidth: true,
    },
};
