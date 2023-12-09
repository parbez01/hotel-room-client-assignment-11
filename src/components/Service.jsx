import { useEffect, useState } from "react";
import SingleService from "./SingleService";


const Service = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://hotel-room-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
          

            <p className="text-5xl font-bold text-center lg:mt-10 lg:mb-10">Available Rooms: {services.length}</p>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                {
                    services.map(service => <SingleService key={service._id} service={service}></SingleService>)
                }
            </div>

        </div>
    );
};

export default Service;
