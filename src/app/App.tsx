import {useTheme} from "./providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";


const App = () => {

    const {theme, toggleTheme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOOOOOOOOOOGLE THEEEEEME</button>
            <AppRouter />
        </div>
    );
};

export default App;