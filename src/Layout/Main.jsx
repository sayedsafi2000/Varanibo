import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import Footer2 from "../Shared/Footer2";

const Main = () => {
    return (
        <>
            <div className="w-9/12 mx-auto">
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <div className="fixed bottom-0 w-full z-20">
                <Footer></Footer>
                <Footer2></Footer2>
            </div>
        </>
    );
};

export default Main;