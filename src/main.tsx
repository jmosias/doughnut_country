import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";
import CatalogueDoughnuts from "./components/CatalogueDoughnuts/CatalogueDoughnuts.tsx";
import CataloguePastries from "./components/CataloguePastries/CataloguePastries.tsx";
import CatalogueBeverages from "./components/CatalogueBeverages/CatalogueBeverages.tsx";
import ModalCart from "./components/ModalCart/ModalCart.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/doughnuts" replace={true} />,
      },
      {
        path: "/doughnuts",
        element: <CatalogueDoughnuts />,
      },
      {
        path: "/pastries",
        element: <CataloguePastries />,
      },
      {
        path: "/beverages",
        element: <CatalogueBeverages />,
      },
    ],
  },
  {
    path: "/cart",
    element: <ModalCart />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
