import React from 'react';
import { Link } from 'react-router-dom';

const CompanyCard = ({company}) => {
    const {company_name, location, website, phone, _id } = company

    return (

        <div className='grid lg:grid-cols-3 border border-gray-200 p-8  mx-auto rounded'>
            <div className="justify-start">
                <p className='font-bold  text-lg'>{company_name}</p>
            </div>

            <div className='grid justify-center gap-5 '>
                <div >
                    <h3 className="font-medium">Location: {location}</h3>
                </div>
                <div >
                    <h3 className="font-medium">Position: {website}</h3>
                </div>
                <p>{phone}</p>
            </div>
            <div className="gap-8">
                <Link to={`/company/:${_id}`}>
                    <button className='text-white bg-violet-500 hover:bg-violet-700 px-5 py-2 mt-20 rounded '>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CompanyCard;