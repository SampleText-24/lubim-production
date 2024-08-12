import {FC} from "react";
import {AppLink} from "shared/ui/AppLink/AppLink";

import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

/**
 * Компонент Navbar представляет собой панель навигации, которая включает ссылки на основные разделы сайта,
 * а также иконки социальных сетей.
 *
 * @param className - Дополнительный класс для стилизации Navbar.
 */
export const Navbar: FC<NavbarProps> = ({className}) => {
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {/* Список навигационных ссылок */}
            <ul className={cls.links}>
                <li><AppLink to={'/'}>МАГАЗИН</AppLink></li>
                <li><AppLink to={'/about'}>О НАС</AppLink></li>
                <li><AppLink to={'/posts'}>КОНТАКТЫ</AppLink></li>
            </ul>

            {/* Логотип компании */}
            <div className={cls.logo}>LOGO</div>

            {/* Список иконок социальных сетей */}
            <ul className={cls.icons}>
                <li>ig</li>
                <li>fb</li>
                <li>yt</li>
            </ul>
        </header>
    );
};
