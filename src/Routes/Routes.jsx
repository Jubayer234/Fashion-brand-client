import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Pages/Home/Home";
import Details from "../Components/Pages/Details/Details";
import ErrorPage from "../Components/Pages/ErrorPage/ErrorPage";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import PrivateRoute from "../Components/Pages/PrivateRoute/PrivateRoute";
import ProductDetails from "../Components/Pages/ProductDetails/ProductDetails";
import ProductsDetails2 from "../Components/Pages/ProductDetails2/ProductsDetails2";
import ProductDetails3 from "../Components/Pages/ProductDetails3/ProductDetails3";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/card.json')
                
            },
            {
                path: '/details/:id',
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myCart'
            },
            {
                path: '/addProducts'
            },
            {
                path: '/productDetail/:id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('/card.json')
            },
            {
                path: '/productDetail2/:id',
                element: <ProductsDetails2></ProductsDetails2>,
                loader: () => fetch('/card.json')

            },
            {
                path: '/productDetail3/:id',
                element: <ProductDetails3></ProductDetails3>,
                loader: () => fetch('/card.json')
            }
        ]
    }
]);
export default routes;