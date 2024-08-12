import {Theme, useTheme} from 'app/providers/ThemeProvider';
import cls from './ThemeSwitcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import LightIcon from 'shared/assets/icons/sun.svg';
import DarkIcon from 'shared/assets/icons/moon.svg';
import {Button} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Компонент, переключающий между светлой и темной темами.
 *
 * @param className - Необязательное имя класса, применяемое к компоненту.
 *
 * @return Элемент кнопки переключения темы.
 */
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            title='switch theme'
        >
            {theme === Theme.LIGHT
                ? <DarkIcon />
                : <LightIcon />
            }

        </Button>
    );
};

