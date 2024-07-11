// import banner from "../../assets/Images/varanibo-banner.jpg"
import BannerBottom from "../BannerBottom/BannerBottom";
import Category from "../Category/Category";
import "../Home/Home.css"
import Video from "../Video/Video";
const Home = () => {
    return (
        <div >
            <section className="mt-20 h-full mb-10">
                <div className="banner">
                    {/* <img className="" src={banner} alt="banner" /> */}
                    <a className="post md:py-3 md:px-14  2xl:py-3 2xl:px-14" href="#">+ Create Post</a>
                </div>
            </section>
            <Category></Category>
            <Video />
            <BannerBottom />
        </div>
    );
};

export default Home;