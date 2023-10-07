import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ErorPage from "../Pages/ErorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErorPage/>,
    children: [{
        path: "/",
      element: <Home/>,
    }],
  },
]);
export default router;
