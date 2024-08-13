import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";


const App = () => {

    const {theme} = useTheme()
    
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='contentPage'>
                <AppRouter />
                <Sidebar />
            </div>
        </div>
    );
};

export default App;