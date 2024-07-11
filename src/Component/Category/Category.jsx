import homeImg from "../../assets/Images/Home rent.png";
import commertialImg from "../../assets/Images/commertial rent.png";
import indoreImg from "../../assets/Images/indore games.png";
import HotelBookImg from "../../assets/Images/Hotel booking.png";
import managementImg from "../../assets/Images/Management.png";
import vehicleImg from "../../assets/Images/Vehicle.png";
import RestaurentImg from "../../assets/Images/Restaurent.png";
import others from "../../assets/Images/Others.png";
import { Link } from "react-router-dom";
const Category = () => {
    return (
        <div className="mb-5">
            <h2 className="text-2xl font-bold">Select Your Cateory From Below</h2>
            <section className="grid md lg:grid-cols-4 gap-6 mt-5">
                <div className="flex flex-col bg-white text-center px-3 py-3 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)"
                }}>
                    <img className="w-16 " src={homeImg} alt="" />
                    <h4>Home Rent</h4>
                    <p>(3432) Ads</p>
                    <p>
                    <Link className="text-red-500 font-bold" to="/home-rent">Click to view the ads.</Link>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)"
                }}>
                    <img className="w-16 " src={commertialImg} alt="" />
                    <h4>Commercial Rent</h4>
                    <p>(143) Ads</p>
                    <p>
                        <Link className="text-red-500 font-bold" to="/commercial-rent">Click to view the ads.</Link>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                }}>
                    <img className="w-16 " src={indoreImg} alt="" />
                    <h4>Indore Game</h4>
                    <p>(1) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                    opacity:0.5,
                    cursor:"not-allowed"
                }}>
                    <img className="w-16 " src={HotelBookImg} alt="" />
                    <h4>Hotel Booking</h4>
                    <p>(00) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                    opacity:0.5,
                    cursor:"not-allowed"
                }}>
                    <img className="w-16 " src={RestaurentImg} alt="" />
                    <h4>Restaurent</h4>
                    <p>(00) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                    opacity:0.5,
                    cursor:"not-allowed"
                }}>
                    <img className="w-16 " src={managementImg} alt="" />
                    <h4>Management </h4>
                    <p>(00) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                <div className="flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                    opacity:0.5,
                    cursor:"not-allowed"
                }}>
                    <img className="w-16 " src={vehicleImg} alt="" />
                    <h4>Vehicle Rent </h4>
                    <p>(00) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                <div className=" flex flex-col bg-white text-center px-3 py-10 items-center justify-center" style={{
                    boxShadow:"0px 22.7986px 68.3957px rgba(0, 0, 0, 0.1)",
                    opacity:0.5,
                    cursor:"not-allowed"
                }}>
                    <img className="w-16 " src={others} alt="" />
                    <h4>Others</h4>
                    <p>(00) Ads</p>
                    <p>
                        <a className="text-red-500 font-bold" href="#">Click to view the ads.</a>
                    </p>
                </div>
                
            </section>
        </div>
    );
};

export default Category;