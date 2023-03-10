import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import { default as Employees } from "../../features/employees/Index";
import NotFound from "../../features/errors/NotFound";
import Error from "../../features/errors/Error";
import TestErrors from "../../features/errors/TestErrors";
import ValidationError from "../../features/errors/ValidationError";
import About from "../../features/home/About";
import Contact from "../../features/home/Contact";
import App from "../layout/App";
import Loading from "../common/Loading";
import { default as CreateEditEmployees } from "../../features/employees/CreateEdit";
import Details from "../../features/employees/Details";
import Login from "../../features/account/Login";
import RequireAuth from "./RequireAuth";
import ServerError from "../../features/errors/ServerError";
import { Index as TodoList } from "../../features/todo/Index";
import { Index as ThemeSelector } from "../../features/themeSelector/Index";
import { Editor } from "../../features/form/Editor";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        element: <RequireAuth />,
        children: [
          { path: "employees", element: <Employees /> },
          { path: "employees/create", element: <CreateEditEmployees /> },
          { path: "employees/edit/:id", element: <CreateEditEmployees /> },
          { path: "employees/details/:id", element: <Details /> },
        ],
      },

      { path: "todolist", element: <TodoList /> },
      { path: "themeselector", element: <ThemeSelector /> },
      { path: "editor", element: <Editor /> },

      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "loading", element: <Loading /> },

      { path: "login", element: <Login /> },

      { path: "test-errors", element: <TestErrors /> },
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      // { path: "server-error", element: <Error title="Server Error" /> },
      { path: "validation-error", element: <ValidationError /> },
      { path: "unauthorized", element: <Error title="Unauthorized" /> },
      { path: "forbidden", element: <Error title="Forbidden" /> },

      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
