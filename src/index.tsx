import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './app/providers/ThemeProvider/ui/ThemeProvider';

import 'shared/config/i18next/i18next';
import { ErrorBoundary } from 'app/providers/ErrorBoundary/inedx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
