import React, { ReactNode, useEffect, useState } from 'react';
import cls from './Modal.module.scss';
import { Portal } from 'shared/ui/Portal';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

/**
 * Модальное окно, рендерящееся через портал и поддерживающее ARIA-атрибуты для доступности.
 *
 * @param isOpen - Флаг, указывающий, открыто ли окно.
 * @param onClose - Функция для закрытия модального окна.
 * @param children - Содержимое модального окна.
 * @param className - Дополнительный класс для стилизации.
 *
 * @return Компонент модального окна.
 */
export const Modal = ({ isOpen, onClose, children, className }: ModalProps) => {
    const [isClosing, setIsClosing] = useState();

    const { theme } = useTheme();

    useEffect(() => {
        if (isOpen) {
            const closeOnEscape = (e: KeyboardEvent) => {
                if (e.key === 'Escape') {
                    onClose();
                }
            };
            window.addEventListener('keydown', closeOnEscape);
            return () => window.removeEventListener('keydown', closeOnEscape);
        }
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    if (!isOpen) return null;

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'appModal'])}>
                <div className={cls.overlay} onClick={handleOverlayClick}>
                    <div className={cls.content} role='dialog' aria-modal='true'>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
