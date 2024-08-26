import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { renderWithTranslation } from 'shared/config/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    // Тест на рендеринг компонента
    it('render Sidebar component', () => {
        renderWithTranslation(<Sidebar />);
        // Проверка, что компонент рендерится по data-testid
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    // Тест на переключение класса 'collapsed'
    it('have collapsed class when toggle button is clicked', () => {
        renderWithTranslation(<Sidebar />);
        const sidebarElement = screen.getByTestId('sidebar');
        const toggleButton = screen.getByText('toggle');

        // Проверка, что по умолчанию класс collapsed отсутствует
        expect(sidebarElement).not.toHaveClass('collapsed');

        // Клик по кнопке для сворачивания
        fireEvent.click(toggleButton);

        // Проверка, что класс collapsed добавился
        expect(sidebarElement).toHaveClass('collapsed');

        // Клик по кнопке для разворачивания
        fireEvent.click(toggleButton);

        // Проверка, что класс collapsed удалился
        expect(sidebarElement).not.toHaveClass('collapsed');
    });
});
