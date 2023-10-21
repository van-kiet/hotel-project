import React from "react";
import { useRoutes } from "react-router-dom";
import HomePage from "../components/homePage/HomePage";
import HomeLayout from "../layouts/home/HomeLayout";
import RoomDetail from "../components/homePage/roomDetail/RoomDetail";
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
          path: "/RoomDetail/:id",
          element: <RoomDetail />,
        },
      ],
    },
  ]);
  return routing;
}
