import { Link } from 'react-router-dom';

const ExpjobItem = ({ejob}) => {
    const { company_logo, company_name, position_name, location, id } = ejob

    return (

        <div className='grid lg:grid-cols-3 border border-gray-200 p-8  mx-auto rounded'>
            <div className="justify-start">
                <img src={company_logo} alt="" />
                <p className='font-bold  text-lg'>{company_name}</p>
            </div>

            <div className='grid justify-center gap-5 '>
                <div >
                    <h3 className="font-medium">Location: {location}</h3>
                </div>
                <div >
                    <h3 className="font-medium">Position: {position_name}</h3>
                </div>
            </div>
            <div className="gap-8">
                <Link>
                    <button className='text-white bg-violet-500 hover:bg-violet-700 px-5 py-2 mt-20 rounded '>Apply</button>
                </Link>
            </div>
        </div>
    );
};

export default ExpjobItem;