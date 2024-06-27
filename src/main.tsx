import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Root } from "./routes/root";
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorPage } from './routes/error-page';
import { Index } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [ {
      index: true,
      element: <Index />,
      loader: 
    } ]
  },
]);

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);