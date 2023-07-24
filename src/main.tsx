import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CatalogueDoughnuts from "./components/CatalogueDoughnuts/CatalogueDoughnuts.tsx";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CatalogueDoughnuts />,
      },
      {
        path: "/doughnuts",
        element: <CatalogueDoughnuts />,
      },
      {
        path: "/pastries",
        element: <div>pastries</div>,
      },
      {
        path: "/beverages",
        element: <div>beverages</div>,
      },
    ],
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
