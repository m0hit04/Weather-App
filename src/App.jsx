import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
}

export default App
