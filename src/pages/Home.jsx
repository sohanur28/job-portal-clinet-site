import Banner from "./Banner";
import { Helmet } from 'react-helmet-async';
import Freshjob from "./Home/Section/Freshjob";
import Expjob from "./Home/Section/Expjob";
import ItCompany from "./Home/Section/ItCompany";

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
            <div className="mt-10 mb-10">
                <Expjob></Expjob>
            </div>
            <div className="mt-10 mb-10">
                <ItCompany></ItCompany>
            </div>
        </div>
    );
};

export default Home;