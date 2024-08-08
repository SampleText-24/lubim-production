import {Suspense} from "react";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";

const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>main</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>L O A D I N G</div>}>
                <Routes>
                    <Route
                        path={'/'}
                        element={<MainPageAsync />}
                    />
                    <Route
                        path={'/about'}
                        element={<AboutPageAsync />}
                    />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;