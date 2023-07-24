import Banner from "./Banner";
import { Helmet } from 'react-helmet-async';
import Freshjob from "./Home/Section/Freshjob";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Job Portal</title>
            </Helmet>
            <Banner></Banner>
            <div className="mt-10 mb-10">
                <Freshjob></Freshjob>
            </div>
        </div>
    );
};

export default Home;