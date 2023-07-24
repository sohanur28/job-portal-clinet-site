import { useEffect, useState } from "react";
import FreshjobItem from "./FreshjobItem";

const Freshjob = () => {
    const [fjobs, setFjobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/freshjob')
            .then(res => res.json())
            .then(data => setFjobs(data))
    }, [])

    return (
        <div>
            <h2 className="text-center text-5xl font-semibold">Fresher Job</h2>
            <div className='grid md:grid-cols-3 gap-8 justify-items-center mt-5'>
                {
                    fjobs.map(fjob => <FreshjobItem
                    key={fjob.id}
                    fjob={fjob}
                    ></FreshjobItem>)
                }
            </div>
        </div>
    );
};

export default Freshjob;