import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

import './styles/index.scss'


const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>

            <button onClick={toggleTheme}>TOOOOOOOOOOGLE THEEEEEME</button>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>L O A D I N G</div>}>
                <Routes>
                    <Route
                        path={'/'}
                        element={<MainPage />}
                    />
                    <Route
                        path={'/about'}
                        element={<AboutPage />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;