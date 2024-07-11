import { IoMdHome } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="w-full bg-white shadow-xl shadow-black py-2 z-10" style={{

        }}>
            <div className=" w-9/12 mx-auto flex justify-around items-center">
                <button className="text-center p-3 rounded-full text-2xl bg-green-100 text-[#3BB296]">
                    <IoMdHome />
                </button>
                <button className="text-center p-5 rounded-full text-2xl text-white -translate-y-4 drop-shadow-2xl" style={{
                    background: "linear-gradient(180deg, #10E9B5 0%, #09B48B 100%)",
                    boxShadow: "0px 4px 10px rgba(7, 82, 114, 0.4)"
                }}>
                    <FaPlus className="" />
                </button>
                <button className="text-center p-3 rounded-full text-2xl bg-green-100 text-[#3BB296]">
                    <IoPerson />
                </button>
            </div>
        </div>
    );
};

export default Footer;