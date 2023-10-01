import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Root from "./pages/Root.tsx";
import { store } from "./store.ts";
import theme from "./theme.tsx";
import TestPage from "./pages/TestPage.tsx";
import Index from "./pages/Index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Root />
      </ThemeProvider>
    </ReduxProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        index: true,
        element: <Index/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'testpage',
        element: <TestPage/>
      }
    ]
  },
  ]);
  
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
