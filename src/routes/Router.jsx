import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import WorkshopJuly17 from "../pages/WorkshopJuly17";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }]
  },
  {
    // Standalone page — no shared Navbar/Footer/Loader, custom header
    path: "/workshop-july17",
    element: <WorkshopJuly17 />
  }
]);
