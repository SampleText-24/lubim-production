import React, { ReactNode } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
    (theme: Theme) =>
    // eslint-disable-next-line react/display-name
    (StoryComponent: () => ReactNode): JSX.Element => (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    );
