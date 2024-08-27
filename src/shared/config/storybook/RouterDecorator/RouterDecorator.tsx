import React, { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// `StyleDecorator` типизируется как функция, принимающая `Story` и возвращающая `JSX.Element`.
export const RouterDecorator = (Story: () => ReactNode): JSX.Element => {
    return <BrowserRouter>{Story()}</BrowserRouter>;
};
