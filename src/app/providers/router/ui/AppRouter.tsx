import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

/**
 * Компонент AppRouter отвечает за маршрутизацию в приложении.
 * Использует конфигурацию маршрутов из routerConfig.
 * Оборачивает маршруты в Suspense для обеспечения ленивой загрузки страниц.
 */
export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routerConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className='pageWrapper'>{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    );
};
