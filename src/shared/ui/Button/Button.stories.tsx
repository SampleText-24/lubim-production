import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'ui/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {},
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
    },
};

export const ClearWithAnimation: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: 'Button',
        textAnimation: true,
    },
};

export const Outline: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
    },
};

export const OutlineWithAnimation: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Button',
        textAnimation: true,
    },
};
