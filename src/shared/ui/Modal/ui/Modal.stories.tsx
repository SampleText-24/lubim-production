// src/shared/ui/Modal/Modal.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        isOpen: {
            control: 'boolean',
            description: 'Определяет, открыто ли модальное окно',
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        isOpen: true,
        onClose: () => {},
        children:
            'Sample text Sample text Sample text Sample text Sample text Sample text Sample text ',
    },
};
