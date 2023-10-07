import BannerBg from "../../public/img/banner.jpg";
const Banner = () => {
  const MybgStyle = {
    backgroundImage: `url(${BannerBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="hero min-h-screen" style={MybgStyle}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="text-2xl font-semibold text-borderColor"><span className="mb-5 text-5xl font-bold block text-white">Level Up Your</span> Convention Experience</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
