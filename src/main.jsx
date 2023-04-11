import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import JobDetails from "./components/JobDetails";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "applied",
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('/data.json'),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: '/details/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch('/data.json'),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
