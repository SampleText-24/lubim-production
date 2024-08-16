import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
}

/**
 * Переиспользуемая кнопка с возможностью выбора темы.
 *
 * @param className - Дополнительный класс для кнопки.
 * @param children - Вложенные элементы отображаемые в кнопке.
 * @param theme - Тема кнопки (по умолчанию CLEAR).
 * @param otherProps - Остальные свойства кнопки, передаваемые в элемент.
 *
 * @return Компонент кнопки.
 */
export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    ...otherProps
}: ButtonProps) => {
    return (
        <button className={classNames(cls.btn, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
