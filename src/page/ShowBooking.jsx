/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const ShowBooking = ({booking,handleDelete}) => {

    const {image, _id, description, price_per_night, room_size, availability, special_offer,service,price,date,email} = booking;
    return (
        <div className="">
            
    
<div className="lg:ml-[300px] mt-10">
<div className="flex lg:w-[1600px] flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-[1000px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
 
 <img className="object-cover w-full rounded-t-lg  md:h-auto md:w-60 md:rounded-none md:rounded-l-lg" src={image} alt="" />
<div className="flex flex-col justify-between p-4 leading-normal">
 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service}</h5>
 <p className="mb-3 font-semibold text-gray-700 dark:text-gray-400 text-xl ">Price: {"$" +price}</p>
 <p className="text-xl font-semibold">Date: {date}</p>

</div>
<p className="text-xl lg:mr-0 mr-8 lg:ml-10 font-semibold">Email: {email}</p>

<div className=" lg:ml-24 ml-6 mr-20 lg:mr-0 mt-2 lg:space-x-0 space-x-4 ">
 <button onClick={()=>handleDelete(_id)} className="bg-red-500 p-3 w-[150px] text-white font-bold rounded-xl  lg:mb-4 mb-10">Cancel Booking</button>

 <Link to={`/update/${_id}`}><button className="bg-red-500 p-3 w-[150px] text-white font-bold rounded-xl  lg:mb-0 mb-10">
    Update Date</button></Link>

</div>
</div>
</div>

            
        </div>
    );
};

export default ShowBooking;