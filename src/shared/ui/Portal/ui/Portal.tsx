import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Компонент Portal рендерит дочерние элементы в конец body через createPortal.
 *
 * @param children - Содержимое, которое будет рендериться через портал.
 *
 * @return Элемент портала.
 */
export const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};
