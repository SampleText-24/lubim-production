import cls from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            data-testid='sidebar'
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                className={cls.collapseBtn}
                textAnimation
                theme={ButtonTheme.OUTLINE}
                onClick={() => setCollapsed((prev) => !prev)}
            >
                {collapsed ? '<' : '>'}
            </Button>
        </div>
    );
};
