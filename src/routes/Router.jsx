import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import HomeLayout from "../layouts/home/HomeLayout";
import Lôn from "../components/Lôn";
export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/cc",
          element: <Lôn />,
        },
      ],
    },
  ]);
  return routing;
}
