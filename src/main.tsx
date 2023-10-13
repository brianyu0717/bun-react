import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import About from "./pages/About.tsx";
import Account from "./pages/Account.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Index from "./pages/Index.tsx";
import TestPage from "./pages/TestPage.tsx";
import Register from "./pages/Register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "testpage",
        element: <TestPage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: ":param",
        element: <Index />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
