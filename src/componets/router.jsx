import { createHashRouter, RouterProvider, Navigate } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Auth } from "./Auth.jsx";
import { MainPageList } from "../Pages/MainPage/MainPageList.jsx";
import {VideoList} from "../Pages/videosPage/VideoList.jsx";

export const router = createHashRouter([
    {
        path: "/",
        element: <Navigate to="/auth" replace />
    },
    {
        path: "/auth",
        element: <Auth />
    },
    {
        path: "/main",
        element: <Layout />,
        children: [
            { path: "", element: <MainPageList /> },
            { path: "videos" , element: <VideoList/> }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/auth" replace />
    }
]);
