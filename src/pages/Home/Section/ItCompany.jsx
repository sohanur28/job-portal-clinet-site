import React, { useEffect, useState } from 'react';
import CompanyCard from './companyCard';

const ItCompany = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/itcompanies')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-5xl font-semibold">Top 3 IT Companies in Bangladesh</h2>
            <div className='grid md:grid-cols-3 gap-8 justify-items-center mt-5'>
                {
                    companies.map(company => <CompanyCard
                        key={company.id}
                        company={company}
                    ></CompanyCard>)
                }
            </div>
        </div>
    );
};

export default ItCompany;