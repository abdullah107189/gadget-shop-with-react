import { createBrowserRouter, Navigate, } from "react-router-dom";
import Main from "../MainLayout/Main";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Products from "../Components/Products/Products";
import AllProductsByCategory from "../Components/AllProductsByCategory/AllProductsByCategory";
import Statistics from "../Pages/Statistics/Statistics";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CartSection from "../Components/CartSection/CartSection";
import WishlistSection from "../Components/WishlistSection/WishlistSection";
import ProductsDetails from "../Pages/ProductsDetails/ProductsDetails";
import AnotherPage from "../Pages/AnotherPage/AnotherPage";
import Login from "../Pages/form/Login";
import Register from "../Pages/form/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/categories.json'),
                        element: <Products></Products>,
                        children: [
                            {
                                path: '/',
                                loader: () => fetch('/products.json'),
                                element: <AllProductsByCategory></AllProductsByCategory>
                            },
                            {
                                path: '/products/:category',
                                loader: () => fetch('/products.json'),
                                element: <AllProductsByCategory></AllProductsByCategory>
                            },
                        ]
                    },
                ]
            },
            {
                path: 'statistics',
                element: <Statistics></Statistics>,
                loader: () => fetch('/products.json'),
            },
            {
                path: 'dashboard',
                element: <Navigate to={'cart-section'}></Navigate>
            },
            {
                path: 'dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: 'cart-section',
                        element: <CartSection></CartSection>
                    },
                    {
                        path: 'wishlist-section',
                        element: <WishlistSection></WishlistSection>
                    }
                ]
            },
            {
                path: '/productDetails/:id',
                element: <ProductsDetails></ProductsDetails>,
                loader: () => fetch('/products.json'),
            },
            {
                path: '/complain-form',
                element: <AnotherPage></AnotherPage>
            },
        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'reg',
        element: <Register></Register>
    }
]);
export default router;