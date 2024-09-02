import cls from './Button.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import React, { FC, ReactNode } from 'react';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    FILLED = 'filled',
}

export enum ButtonSize {
    S = 'small',
    M = 'medium',
    L = 'large',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    children?: ReactNode;
    textAnimation?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
}

/**
 * Переиспользуемая кнопка с возможностью выбора темы.
 *
 * @param className - Дополнительный класс для кнопки.
 * @param children - Вложенные элементы отображаемые в кнопке.
 * @param theme - Тема кнопки (по умолчанию CLEAR).
 * @param size - Размер кнопки (S, M, L).
 * @param textAnimation - Анимация текста при наведении (по умолчанию false).
 * @param disabled - Флаг отключения кнопки.
 * @param fullWidth - Флаг, позволяющий установить ширину кнопки на 100%.
 * @param otherProps - Остальные свойства кнопки, передаваемые в элемент.
 *
 * @return Компонент кнопки.
 */
export const Button: FC<ButtonProps> = ({
    className,
    children,
    size = ButtonSize.M,
    theme = ButtonTheme.CLEAR,
    textAnimation = false,
    disabled,
    fullWidth,
    ...otherProps
}: ButtonProps) => {
    const mods: Record<string, boolean> = {
        [cls.textAnimation]: textAnimation,
        [cls.disabled]: disabled,
        [cls.fullWidth]: fullWidth,
    };

    return (
        <button
            disabled={disabled}
            className={classNames(cls.btn, mods, [className, cls[size], cls[theme]])}
            {...otherProps}
        >
            <span>{children}</span>
        </button>
    );
};
