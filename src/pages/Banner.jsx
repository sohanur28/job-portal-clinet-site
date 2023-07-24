import bannerImage from '../assets/6671-scaled.jpg'

const Banner = () => {
    return (
        <div>
            <div className='md:flex mx-24 items-center'>
            <div>
                <h2 className='md:text-6xl text-4xl font-semibold font-serif'>
                    <span>One Step</span><br/> 
                    <span className=''>Closer To Your</span><br/>
                    <span className='text-violet-400'>Dream Job</span>
                </h2>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='text-white bg-violet-500 hover:bg-violet-700 mt-8 p-3 rounded'>Get Started</button>
            </div>
            <div>
                <img className='w-auto' src={bannerImage} alt=""/>
            </div>
        </div>
        </div>
    );
};

export default Banner;