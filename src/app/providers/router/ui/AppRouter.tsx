import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../config/routeConfig/routeConfig';

/**
 * Компонент AppRouter отвечает за маршрутизацию в приложении.
 * Использует конфигурацию маршрутов из routerConfig.
 * Оборачивает маршруты в Suspense для обеспечения ленивой загрузки страниц.
 */
export const AppRouter = () => {
    return (
        <Suspense fallback={<div>L O A D I N G</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className='pageWrapper'>{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
