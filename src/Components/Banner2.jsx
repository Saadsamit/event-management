import BannerBg from "../../public/img/banner2.jpg";
const Banner2 = () => {
    const MybgStyle = {
        backgroundImage: `url(${BannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
      return (
        <div className="hero min-h-[70vh]" style={MybgStyle}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-2xl font-semibold text-borderColor"><span className="mb-5 text-5xl font-bold block text-white">Level Up Your</span> Convention Experience</h1>
            </div>
          </div>
        </div>
    );
};

export default Banner2;