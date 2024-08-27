import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    children?: ReactNode;
    textAnimation?: boolean;
}

/**
 * Переиспользуемая кнопка с возможностью выбора темы.
 *
 * @param className - Дополнительный класс для кнопки.
 * @param children - Вложенные элементы отображаемые в кнопке.
 * @param theme - Тема кнопки (по умолчанию CLEAR).
 * @param textAnimation - Анимация текста при наведении (по умолчанию false).
 * @param otherProps - Остальные свойства кнопки, передаваемые в элемент.
 *
 * @return Компонент кнопки.
 */
export const Button: FC<ButtonProps> = ({
    className,
    children,
    theme = ButtonTheme.CLEAR,
    textAnimation = false,
    ...otherProps
}: ButtonProps) => {
    return (
        <button
            className={classNames(cls.btn, { [cls.textAnimation]: textAnimation }, [
                className,
                cls[theme],
            ])}
            {...otherProps}
        >
            <span>{children}</span>
        </button>
    );
};
