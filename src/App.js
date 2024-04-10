import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Car from "./pages/Car";
import Navbar from "./component/Navbar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/car",
    element: <Car />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
