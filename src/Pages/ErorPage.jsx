import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ErorPage = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div data-aos="zoom-in" className="flex justify-center items-center flex-col min-h-screen space-y-5">
            <h1 className="text-8xl font-bold text-headerColor">404</h1>
            <p className="text-3xl text-center">ERROR - PAGE NOT FOUND</p>
            <Link to="/" className="capitalize MyBtn btn">go back to home</Link>
        </div>
    );
};

export default ErorPage;