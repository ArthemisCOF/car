import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Car from './pages/Car';
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/car',
        element: <Car />
    }
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
