import { Navigate } from 'react-router';

export function PublicRoute({ component: Component, isAuth }) {
  return <>{isAuth ? <Navigate to='/' /> : <Component />}</>;
}
