import { ToastContainer } from 'react-toastify';
import { useAuth } from './config/auth-context';
import { PrivateRoute } from './routes/PrivateRouter';
import { PublicRoute } from './routes/PublicRoutes';
import { Routes, Route } from 'react-router-dom';
import { Chats } from './pages/Chats/Chats';
import { Chat } from './components/Chat/Chat';
import { Login } from './pages/Login/Login';

function App() {
  const { user } = useAuth();
  const screenWidth = window.screen.width;

  return (
    <div className='App'>
      <Routes>
        {screenWidth < 768 ? (
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
