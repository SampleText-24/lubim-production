import React, { FC } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';

import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { RouterPath } from 'app/providers/router/config/routeConfig/routeConfig';

interface NavbarProps {
    className?: string;
}

interface SocialIcons {
    label: string | null;
    Component: React.FC | null;
}

interface NavLinks {
    path: string;
    label: string;
}

/**
 * Компонент Navbar представляет собой панель навигации, которая включает ссылки на основные разделы сайта,
 * а также иконки социальных сетей.
 *
 * @param className - Дополнительный класс для стилизации Navbar.
 */
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    const navLinks: NavLinks[] = [
        { path: RouterPath.main, label: t('МАГАЗИН') },
        { path: RouterPath.about, label: t('О НАС') },
        { path: '/posts', label: t('КОНТАКТЫ') },
    ];

    const socialIcons: SocialIcons[] = [
        { label: t('ig'), Component: null },
        { label: t('fb'), Component: null },
        { label: null, Component: LangSwitcher },
        { label: null, Component: ThemeSwitcher },
    ];

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {/* Список навигационных ссылок */}
            <ul className={cls.links}>
                {navLinks.map(({ path, label }) => (
                    <li key={path}>
                        <AppLink to={path}>{label || path}</AppLink>
                    </li>
                ))}
            </ul>

            {/* Логотип компании */}
            <div className={cls.logo}>LOGO</div>

            {/* Список иконок социальных сетей */}
            <ul className={cls.icons}>
                {socialIcons.map(({ label, Component }, index) => (
                    <li key={index} aria-label={label || undefined}>
                        {Component ? <Component /> : label}
                    </li>
                ))}
            </ul>
        </header>
    );
};
