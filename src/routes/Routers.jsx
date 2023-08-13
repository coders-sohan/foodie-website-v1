import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ExploreUs from "../pages/ExploreUs/ExploreUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/get-in-touch",
        element: <ExploreUs />,
      },
    ],
  },
]);
