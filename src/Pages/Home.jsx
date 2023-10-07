import Banner from "../Components/Banner";
import EspoteGaming from "../Components/EspoteGaming";
import ExploreGaming from "../Components/ExploreGaming";
import OurServices from "../Components/OurServices";

const Home = () => {
    return (
        <div>
            <Banner/>
            <OurServices/> 
            <ExploreGaming/>
            <EspoteGaming/>
        </div>
    );
};

export default Home;