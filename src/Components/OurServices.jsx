import Card from "./Card";
import { useOutletContext } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const OurServices = () => {
    const evenData = useOutletContext()
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="container mx-auto pt-10">
            <h2 data-aos="zoom-in" className="text-center sm:text-5xl text-4xl font-bold text-headerColor capitalize pb-5">our services</h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                {evenData?.map((data,idx)=><Card key={idx} data={data}/>)}
            </div>
        </div>
    );
};

export default OurServices;