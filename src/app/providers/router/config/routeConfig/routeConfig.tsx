import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

/**
 * Перечисление всех маршрутов в приложении.
 * Используется для обеспечения типобезопасности при работе с маршрутами.
 */
export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
}

/**
 * Маппинг маршрутов на их пути.
 * Позволяет централизованно управлять путями маршрутов.
 */
export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
};

/**
 * Конфигурация маршрутов, включающая путь и соответствующий React-компонент.
 * Используется в AppRouter для динамического создания маршрутов.
 */
export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RouterPath.about,
        element: <AboutPage />,
    },
};
