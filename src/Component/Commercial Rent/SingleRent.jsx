import { SlCalender } from "react-icons/sl";
import {  useNavigate } from "react-router-dom";
import { FaEye, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaShare } from "react-icons/fa6";
import PropTypes from 'prop-types';
const SingleRent = ({ datas }) => {
    const { id, image, name, time, details, view } = datas;
    const navigate = useNavigate();
    const handleDetail = (id)=>{
        navigate(`${id}`);
    }
    console.log(datas);
    return (
        <div className="card shadow-xl hover:scale-105 transition-all duration-500" style={{
            boxShadow: "0 0 15px -10px rgba(0, 0, 0, 0.233)"
        }}>
            <figure className="px-5 pt-5">
                <img
                    className="w-full h-56 rounded-xl "
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[#686868]">
                    {name}
                </h2>
                <div className="flex justify-start items-center text-[#3BB296]">
                    <SlCalender className="font-extrabold" />
                    <p className="text-lg ml-2">{time}</p>
                </div>
                <p className="text-[#686868]">{details}</p>
                {/* <Link to={{
                    pathname:`/commercial-rent/${id}`,
                    state:{datas}
                }}
                    className="text-xl text-[#3BB296]">
                    View Details
                </Link> */}
                <button onClick={()=>handleDetail(id)}>View</button>
                <div className="flex justify-start items-center">
                    <FaEye className="text-[#686868] text-xl" />
                    <h4 className="ml-3 mr-4 text-[#686868] text-xl">{view}</h4>
                    <details className="dropdown">
                        <summary className="btn text-[#686868] bg-white shadow-none border-none m-1 text-xl"><FaShare /></summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <div className="flex justify-around items-center ">
                                <a className="text-lg text-white rounded-full bg-[#0dd3a4] p-3" href="#"><FaFacebook /></a>
                                <a className="text-lg text-white rounded-full bg-[#0dd3a4] p-3" href="#"><FaTwitter /></a>
                                <a className="text-lg text-white rounded-full bg-[#0dd3a4] p-3" href="#"> <FaWhatsapp /></a>
                            </div>
                        </ul>
                    </details>
                </div>

            </div>
        </div>
    );
};
SingleRent.propTypes = {
    datas: PropTypes.node,
}

export default SingleRent;