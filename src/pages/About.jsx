import { Helmet } from 'react-helmet-async';
const About = () => {
    return (
        <div>
            <Helmet>
                <title>About | Job Portal</title>
            </Helmet>
            <div>
                <img src="https://preview.colorlib.com/theme/jobpply/images/undraw_work_time_lhoj.svg" alt="" />
            </div>
            <div className='mt-10 mb-10'>
                <h2 className='text-center text-5xl font-semibold'>Welcome to Jobpply</h2><br />
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <br />
                <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
            </div>
        </div>
    );
};

export default About;