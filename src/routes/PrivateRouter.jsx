import { Navigate } from 'react-router';

export function PrivateRoute({ component: Component, isAuth }) {
  return <>{isAuth ? <Component /> : <Navigate replace to='/login' />}</>;
}
