import { screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation/renderWithTranslation';

describe('button', () => {
    // Отображение кнопки с текстом по умолчанию
    it('renders with default theme', () => {
        renderWithTranslation(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Отображение кнопки с прозрачной темой
    it('renders with clear theme', () => {
        renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Отображение кнопки с кастомным содержимым
    it('renders with custom children', () => {
        renderWithTranslation(
            <Button>
                <span>Custom children</span>
            </Button>,
        );
        expect(screen.getByText('Custom children')).toBeInTheDocument();
    });

    // Вызов обработчика onClick при клике на кнопку
    it('calls onClick handler when clicked', () => {
        const onClick = jest.fn();
        renderWithTranslation(<Button onClick={onClick}>Click me</Button>);
        screen.getByText('Click me').click();
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
