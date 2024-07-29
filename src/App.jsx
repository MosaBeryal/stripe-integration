import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckOutPage from "./pages/CheckOutPage";
import Success from "./pages/SuccessPage";
import Cancel from "./pages/Cancel";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CheckOutPage />,
    },
    {
      path: "/success",
      element: <Success />,
    },
    {
      path: "/cancel",
      element: <Cancel />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
