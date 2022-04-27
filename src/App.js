import { ToastContainer } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';
import { useAuth } from './config/auth-context';
import { PrivateRoute } from './routes/PrivateRouter';
import { PublicRoute } from './routes/PublicRoutes';
import { Routes, Route } from 'react-router-dom';
import { Chats } from './pages/Chats/Chats';
import { Chat } from './components/Chat/Chat';
import { Login } from './pages/Login/Login';

function App() {
  const { user } = useAuth();
  const isNotMobile = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div className='App'>
      <Routes>
        {!isNotMobile ? (
          <>
            <Route
              path='/'
              element={<PrivateRoute isAuth={user} component={Chats} />}
            />
            <Route
              path=':id'
              element={<PrivateRoute isAuth={user} component={Chat} />}
            />
          </>
        ) : (
          <Route
            path='/'
            element={<PrivateRoute isAuth={user} component={Chats} />}
          >
            <Route
              path=':id'
              element={<PrivateRoute isAuth={user} component={Chat} />}
            />
          </Route>
        )}
        <Route
          path='/'
          element={<PrivateRoute isAuth={user} component={Chats} />}
        >
          <Route
            path=':id'
            element={<PrivateRoute isAuth={user} component={Chat} />}
          />
        </Route>
        <Route
          path='/login'
          element={<PublicRoute isAuth={user} component={Login} />}
        />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
