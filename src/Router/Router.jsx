import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
// import Login from "../Component/Login/Login";
import LoginLayout from "../Layout/LoginLayout";
import CommercialRent from "../Component/Commercial Rent/CommercialRent";
import HomeRent from "../Component/HomeRent/HomeRent";
// import Login from "../Component/Login/Login";
import LoginForm from "../Component/LoginForm/LoginForm";
import SingleProduct from "../Component/Commercial Rent/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home-rent",
                element: <HomeRent></HomeRent>
            },
            {
                path: "/commercial-rent",
                element: <CommercialRent></CommercialRent>
            },
            {   
                path: 'commercial-rent/:id',
                element: <SingleProduct></SingleProduct>
            },

        ]
    },
    {
        path: "/login",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: "/login",
                element:<LoginForm></LoginForm>
            },
            

        ]
    }
]);
export default router;