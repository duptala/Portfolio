import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Designs from "./pages/Designs.tsx";
import Blog from "./pages/Blog.tsx";
import AboutMe from "./pages/AboutMe.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "designs",
        element: <Designs />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "*",
        element: <ErrorPage />, // this redirects all unknown routes to the error page
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
