import { FaGoogle } from 'react-icons/fa';


const SocialLogin = () => {
    return (
        <div>
            <div className='divider'></div>
            <div className='w-full text-center my-5'>
                <button className="btn btn-outline btn-success">
                    <FaGoogle></FaGoogle> sign in
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;