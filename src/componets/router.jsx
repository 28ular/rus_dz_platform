import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./Layout.jsx";
import { Auth } from "./Auth.jsx";
import { MainPageList } from "../Pages/MainPage/MainPageList.jsx";

export const router = createBrowserRouter([
    {
        // По умолчанию редиректим с корня на /auth
        path: "/",
        element: <Navigate to="/auth" replace />,
    },
    {
        path: "/auth",
        element: <Auth />,
    },
    {
        // Защищённые маршруты
        path: "/main",
        element: <Layout />,
        children: [
            { path: "", element: <MainPageList /> },
        ],
    },
    {
        // Все остальные пути на /auth
        path: "*",
        element: <Navigate to="/auth" replace />,
    },
]);
