import BannerBg from "../../public/img/banner2.jpg";
const ExploreGaming = () => {
    const MybgStyle = {
        backgroundImage: `url(${BannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    return (
        <div className="py-20">
            <div className="hero min-h-[70vh]" style={MybgStyle}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="text-2xl font-semibold text-borderColor mb-5"><span className=" text-5xl font-bold block text-white">Welcome to </span>Explore a Gaming Wonderland</h1>
              <p>Are you ready to dive into a world of pixelated adventures, epic battles, and endless fun? Look no further than Explore a Gaming Wonderland, where gaming enthusiasts from all corners of the globe converge to celebrate their passion for gaming!</p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ExploreGaming;