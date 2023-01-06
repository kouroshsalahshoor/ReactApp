import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { default as Employees } from "../../features/employees/Index";
import NotFound from "../../features/errors/NotFound";
import Error from "../../features/errors/Error";
import TestErrors from "../../features/errors/TestErrors";
import ValidationError from "../../features/errors/ValidationError";
import About from "../../features/home/About";
import Contact from "../../features/home/Contact";
import App from "../layout/App";
import Loading from "../layout/Loading";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "employees", element: <Employees /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "loading", element: <Loading /> },

      { path: "test-errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <Error title="Server Error" /> },
      { path: "validation-error", element: <ValidationError /> },
      { path: "unauthorized", element: <Error title="Unauthorized" /> },
      { path: "forbidden", element: <Error title="Forbidden" /> },

      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
