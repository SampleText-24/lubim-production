import { screen } from '@testing-library/react';
import { Navbar } from './Navbar';
import { componentRender } from 'shared/config/tests/ComponentRender/ComponentRender';

describe('Navbar', () => {
    // Тест на рендер Navbar
    it('renders Navbar component', () => {
        componentRender(<Navbar />);
        expect(screen.getByRole('banner')).toBeInTheDocument(); // Проверяем, что элемент header присутствует
    });

    // Тест на наличие ссылок навигации
    it('renders navigation links', () => {
        componentRender(<Navbar />);
        expect(screen.getByText('МАГАЗИН')).toBeInTheDocument();
        expect(screen.getByText('О НАС')).toBeInTheDocument();
        expect(screen.getByText('КОНТАКТЫ')).toBeInTheDocument();
    });

    // Тест на наличие логотипа
    it('renders the company logo', () => {
        componentRender(<Navbar />);
        expect(screen.getByText('LOGO')).toBeInTheDocument();
    });

    // Тест на наличие иконок соцсетей
    it('renders social icons', () => {
        componentRender(<Navbar />);
        expect(screen.getByText('ig')).toBeInTheDocument();
        expect(screen.getByText('fb')).toBeInTheDocument();
    });

    // Тест на наличие переключателя языка
    it('renders the language switcher', () => {
        componentRender(<Navbar />);
        expect(screen.getByRole('button', { name: /язык/i })).toBeInTheDocument();
    });

    // Тест на наличие переключателя темы
    it('renders the theme switcher', () => {
        componentRender(<Navbar />);
        expect(screen.getByRole('button', { name: /theme/i })).toBeInTheDocument();
    });
});
