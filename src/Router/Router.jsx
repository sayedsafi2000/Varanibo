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
                path: "/commercial-rent",
                element: <CommercialRent></CommercialRent>
            },
            {   
                path: '/commercial-rent/commercial-rent/:id',
                loader:({params})=> fetch(`Commercialrent.json/${params.id}`),
                element: <SingleProduct></SingleProduct>
            },
            {
                path: "/home-rent",
                element: <HomeRent></HomeRent>
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