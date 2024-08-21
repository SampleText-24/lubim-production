import React, { ErrorInfo, ReactNode, Suspense } from 'react';
import { PageError } from 'shared/ui/PageError';
import { PageLoader } from 'widgets/PageLoader';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // Этот метод жизненного цикла ловит ошибки в дочерних компонентах
    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    // Этот метод используется для логирования ошибок (например, в аналитике)
    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by ErrorBoundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Suspense fallback={<PageLoader />}>
                    <PageError />
                </Suspense>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
