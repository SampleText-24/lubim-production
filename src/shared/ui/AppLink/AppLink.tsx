import cls from './AppLink.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

/**
 * Перечисление тем для компонента AppLink.
 * Каждая тема соответствует определенному стилю ссылки.
 */
export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

/**
 * Компонент AppLink представляет собой ссылку с возможностью добавления классов и тем.
 *
 * @param className - Дополнительный класс для ссылки.
 * @param children - Дети компонента.
 * @param to - Адрес ссылки.
 * @param theme - Тема для стилизации ссылки.
 * @param otherProps - Дополнительные свойства, которые будут переданы в компонент Link.
 */
export const AppLink: FC<AppLinkProps> = ({
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
}) => {

    return (
        <Link
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

