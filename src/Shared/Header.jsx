import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { IoPerson } from "react-icons/io5";
const Header = () => {
    return (
        <nav className="py-4">
            <div className="fixed top-0 w-9/12 flex justify-between items-center z-10 bg-white">
                <h1>
                    <a href="/"><img src={logo} alt="" /></a>
                </h1>
                <Link to="/login">
                    <button className="px-4 py-2 text-sm flex items-center text-white  gap-1 rounded-md ">
                        <IoPerson /> Login
                    </button></Link>
            </div>
        </nav>
    );
};

export default Header;