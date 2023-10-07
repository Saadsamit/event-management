import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErorPage from "../Pages/ErorPage";
import EventDetail from "../Pages/eventDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorPage/>,
    loader: ()=> fetch('/even.json'),
    children: [{
        path: "/",
      element: <Home/>,
    },
    {
        path: "/even/:id",
      element: <EventDetail/>,
    }
],
  },
]);
export default router;
