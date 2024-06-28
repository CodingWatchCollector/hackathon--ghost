import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./routes/root";
import React from "react";
import { createRoot } from "react-dom/client";
import { ErrorPage } from "./routes/error-page";
import { Index, loader } from "./routes";
import "./index.css";
import Move from "./components/MovePage/Move";
import { SetPage, loader as setLoader } from "./routes/set";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: loader,
      },
      {
        path: "sets/:slug",
        loader: setLoader,
        element: <SetPage />,

      },
      
    ],
  },

  {
    path: "/move",
    element: <Move />, 
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
