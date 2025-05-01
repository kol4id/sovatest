import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Navigate to="products" replace />},
            {path: 'products/:page?', element: <Home /> },
        ]
    }
])