import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import './styles/index.scss';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { PageLoader } from 'widgets/PageLoader';

const App = () => {
    const { theme } = useTheme();

    useEffect(() => {
        throw new Error();
    }, []);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className='contentPage'>
                    <AppRouter />
                    <Sidebar />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
