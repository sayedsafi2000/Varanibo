import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import firstImg from "../../assets/Images/Add-Banner-For-Varanibo.jpg";
import secondImg from "../../assets/Images/Banyan-School.jpg";
import thirdImg from "../../assets/Images/Dort Varanibo.jpg";
const BannerBottom = () => {
    return (
        <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper mb-5"
      >
        <SwiperSlide><img className='w-full' src={firstImg} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={secondImg} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={thirdImg} alt="" /></SwiperSlide>
        
      </Swiper>
    );
};

export default BannerBottom;