import image1 from '../../assets/slide1.jpg'
import image2 from '../../assets/slide2.jpg'
import image3 from '../../assets/slide3.jpg' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
 
 

export default function Carosoul() {
  const text1 = 'Coding is the process of using programming languages to give instructions to a computer.'
  const text3 = 'Teamwork is the collaborative effort of a group to achieve a common goal '
  const text2 = ''
  return (
    <div className='  mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1} text={text1}/></SwiperSlide>
        <SwiperSlide><Slide image={image2} text={text2}/></SwiperSlide>
        <SwiperSlide><Slide image={image3} text={text3}/></SwiperSlide>  
      </Swiper>
    </div>
  );
}