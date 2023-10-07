import { useEffect, useState } from "react";
import EsportCard from "./EsportCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import 'swiper/css';
const EspoteGaming = () => {
    const [eSportData, setData] = useState([]) 
    useEffect(()=>{
        fetch("./eSport.json")
        .then(res=> res.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            <h2 className="text-center sm:text-5xl text-4xl font-bold text-headerColor capitalize pb-5">e-sport gaming</h2>
            
            <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {eSportData.map((data,idx)=><SwiperSlide key={idx}><EsportCard data={data}></EsportCard></SwiperSlide>)}
    </Swiper>
        </div>
    );
};

export default EspoteGaming;