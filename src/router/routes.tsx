import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Profile from "../pages/Profile";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {index: true, element: <Navigate to="products" replace />},
            {path: 'products/:page?', element: <Home/> },
            {path: 'product/:id?', element: <Product/> },
            {path: 'profile', element: <Profile/> },
        ]
    }
])