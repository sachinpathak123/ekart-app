import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./Body";
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import { CartProvider } from "react-use-cart";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AppLayout = () => {
    return (
        <div>
            <CartProvider>
                <ToastContainer />
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </CartProvider>
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
        ],
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={appRouter} />
);
