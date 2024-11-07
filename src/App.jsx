import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/settings",
    element: <p>settings</p>
  },
  {
    path: "/profile",
    element: <p>profile</p>
  },
  {
    path: "*",
    element: <Home />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
