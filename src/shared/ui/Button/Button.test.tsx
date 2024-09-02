import { screen } from '@testing-library/react';
import { Button, ButtonTheme, ButtonSize } from 'shared/ui/Button/Button';
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation/renderWithTranslation';

describe('Button Component', () => {
    // Тест на рендер кнопки с текстом по умолчанию
    it('renders with default theme', () => {
        renderWithTranslation(<Button>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Тест на рендер кнопки с темой CLEAR
    it('renders with clear theme', () => {
        renderWithTranslation(<Button theme={ButtonTheme.CLEAR}>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Тест на рендер кнопки с темой OUTLINE
    it('renders with outline theme', () => {
        renderWithTranslation(<Button theme={ButtonTheme.OUTLINE}>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Тест на рендер кнопки с темой FILLED
    it('renders with filled theme', () => {
        renderWithTranslation(<Button theme={ButtonTheme.FILLED}>Click me</Button>);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    // Тест на рендер кнопки с кастомным содержимым
    it('renders with custom children', () => {
        renderWithTranslation(
            <Button>
                <span>Custom children</span>
            </Button>,
        );
        expect(screen.getByText('Custom children')).toBeInTheDocument();
    });

    // Тест на вызов обработчика onClick при клике на кнопку
    it('calls onClick handler when clicked', () => {
        const onClick = jest.fn();
        renderWithTranslation(<Button onClick={onClick}>Click me</Button>);
        screen.getByText('Click me').click();
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    // Тест на рендер кнопки размером SMALL
    it('renders with small size', () => {
        renderWithTranslation(<Button size={ButtonSize.S}>Click me</Button>);
        expect(screen.getByText('Click me')).toHaveStyle('font-size: var(--font-size-s)');
    });

    // Тест на рендер кнопки размером MEDIUM
    it('renders with medium size', () => {
        renderWithTranslation(<Button size={ButtonSize.M}>Click me</Button>);
        expect(screen.getByText('Click me')).toHaveStyle('font-size: var(--font-size-m)');
    });

    // Тест на рендер кнопки размером LARGE
    it('renders with large size', () => {
        renderWithTranslation(<Button size={ButtonSize.L}>Click me</Button>);
        expect(screen.getByText('Click me')).toHaveStyle('font-size: var(--font-size-l)');
    });

    // Тест на рендеринг кнопки в состоянии disabled
    it('renders as disabled', () => {
        renderWithTranslation(<Button disabled>Click me</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    // Тест на рендеринг кнопки с шириной 100% (fullWidth)
    it('renders with full width', () => {
        renderWithTranslation(<Button fullWidth>Click me</Button>);
        expect(screen.getByRole('button')).toHaveClass('fullWidth');
    });
});
