import { useEffect, useState } from "react";
import ExpjobItem from "./ExpjobItem";

const Expjob = () => {
    const [ejobs, setEjobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/expjob')
            .then(res => res.json())
            .then(data => setEjobs(data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-5xl font-semibold">Experienced Jobs</h2>
            <div className='grid md:grid-cols-3 gap-8 justify-items-center mt-5'>
                {
                    ejobs.map(ejob => <ExpjobItem
                        key={ejob.id}
                        ejob={ejob}
                    ></ExpjobItem>)
                }
            </div>
        </div>
    );
};

export default Expjob;