import "./Video.css";
import { TbPlayerPlayFilled } from "react-icons/tb";

const Video = () => {
    return (
        <div data-toggle="modal" href="#video9" role="button" className="our-video-content-card tns-item tns-slide-active mb-10 mt-5">
            <h2 className="text-2xl font-bold mb-5">See Our Video</h2>
            <div className="our-video-box">
                {/* <img className="" src="https://varanibo.com/assets/img/uploaded/ads/202312300749New Varanibo Poster.jpg" alt="img" /> */}
                <div className="bgImage">
                    <div className="our-video-profile flex items-center mb-1 ml-1">
                        <TbPlayerPlayFilled className="border-1 bg-gray-400 w-8 h-8 p-2 rounded-full text-white mr-1"/>
                        <h6>How To Post in Vara nibo</h6>
                    </div>
                </div>
                <div className="video-box-overlay"></div>

            </div></div>
    );
};

export default Video;