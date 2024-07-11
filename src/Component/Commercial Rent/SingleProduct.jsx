import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import bg from "../../assets/Images/Dort Varanibo.jpg";
import LocationSelector from '../LocationSelector/LocationSelector';

import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";
const SingleProduct = ({state}) => {
    // const { image, name, view} = item;
    // const params = useParams();
    const loadeData = useLoaderData();
    console.log(state);
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];
    return (
        <div className='mt-24 '>
            <div className="2xl:flex">
                <div className="w-full 2xl:w-1/3 h-svh border-2 px-4 pt-4">
                    <img src={bg} className='mb-4 h-[30vh] w-full' alt="" />
                    <div className="flex flex-col gap-2 ">
                        <LocationSelector
                            division={"Select Upazila"}
                        ></LocationSelector>
                        <LocationSelector
                            division={"Select Area"}
                        ></LocationSelector>
                        <button className="bg-[#0fc599] dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-bold py-3 px-10 rounded focus:outline-none focus:shadow-outline text-2xl z-10" type="button">Search</button>
                    </div>

                </div>
                <div className="2xl:w-2/3 h-svh border-2 2xl:flex justify-between gap-10">
                    <div className=''>
                        <ImageGallery className="w-full " items={images} />
                    </div>
                    <div className="">
                        <h1>{loadeData.name}</h1>
                        <p>মিরপুর ১ উত্তর বিশিল ৬ নাম্বার রোড,এই দোকান টি ভাড়া দেওয়া হবে। ১৫০ স্কয়ার ফিট, ভাড়া ৭০০০ অ্যাডভান্স ১লাখ মুদি, ওষুধ, হোটেল সহ যেকোনো ব্যাবসা করতে পারবে। +8801846952001,,01715699301</p>
                        <p>Contact: +8801846952001,,01715699301</p>
                        <strong>Location</strong>
                        <h4>Adabor | আদাবর, Adabor | আদাবর, Dhaka | ঢাকা, Dhaka, Bangladesh,</h4>
                        <h5>মিরপুর ১ উত্তর বিশিল ৬ নাম্বার রোড</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};
SingleProduct.propTypes = {
    item: PropTypes.node,
}
export default SingleProduct;