import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErorPage from "../Pages/ErorPage";
import EventDetail from "../Pages/eventDetail";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import PriveteRouer from "./priveteRouer";
import Schedule from "../Pages/Schedule";
import Contact from "../Pages/Contact";

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
        path: "/schedule",
        element: <PriveteRouer><Schedule /></PriveteRouer>,
      },
      {
        path: "/contact",
        element: <PriveteRouer><Contact /></PriveteRouer>,
      },
      {
        path: "/even/:id",
        element: <PriveteRouer><EventDetail /></PriveteRouer>,
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
