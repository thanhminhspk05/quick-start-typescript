import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DashboardPage from './pages/Dashboard';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
