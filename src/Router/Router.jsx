import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErorPage from "../Pages/ErorPage";
import EventDetail from "../Pages/eventDetail";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorPage />,
    loader: () => fetch("/even.json"),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/even/:id",
        element: <EventDetail />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      }
    ],
  },
]);
export default router;
