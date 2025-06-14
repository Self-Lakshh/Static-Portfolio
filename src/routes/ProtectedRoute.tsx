import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    isAuthenticated: boolean;
}

export function ProtectedRoute({ isAuthenticated }: ProtectedRouteProps) {
    const location = useLocation();
    if (!isAuthenticated) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return <Outlet />;
}

export function PublicRoute({ isAuthenticated }: ProtectedRouteProps) {
    const location = useLocation();
    if (isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return <Outlet />;
}
