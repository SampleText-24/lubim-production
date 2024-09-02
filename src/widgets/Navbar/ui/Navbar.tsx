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

/**
 * Компонент Navbar представляет собой панель навигации, которая включает ссылки на основные разделы сайта,
 * а также иконки социальных сетей.
 *
 * @param className - Дополнительный класс для стилизации Navbar.
 */
export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            {/* Список навигационных ссылок */}
            <ul className={cls.links}>
                <li>
                    <AppLink to={RouterPath.main}>{t('МАГАЗИН')}</AppLink>
                </li>
                <li>
                    <AppLink to={RouterPath.about}>{t('О НАС')}</AppLink>
                </li>
                <li>
                    <AppLink to={'/posts'}>{t('КОНТАКТЫ')}</AppLink>
                </li>
            </ul>

            {/* Логотип компании */}
            <div className={cls.logo}>LOGO</div>

            {/* Список иконок социальных сетей */}
            <ul className={cls.icons}>
                <li>{t('ig')}</li>
                <li>{t('fb')}</li>
                <li>
                    <LangSwitcher />
                </li>
                <li>
                    <ThemeSwitcher />
                </li>
            </ul>
        </header>
    );
};
