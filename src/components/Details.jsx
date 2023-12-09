import { useContext, useState } from "react";
import { Navigate, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";


const Details = () => {
    const service = useLoaderData();
    const { image, _id, description, price_per_night, room_size, availability, special_offer } = service;

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location =useLocation()

    

    const handleBookService = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking = {
            customerName: name,
            email,
            image,
            date,
            service: description,
            service_id: _id,
            price: price_per_night,
        }
        console.log(booking);

    if(user){
         
        fetch('https://hotel-room-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your Booked Successfully Done",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    // navigate(location?.state ? location.state : '/login')
    toast.error('Please Login First')

    }
   
     

    return (
        <div>
            <h2 className="text-5xl font-bold text-center lg:mt-10 mt-6 mb-10 lg:mb-0">Details About This Room</h2>


            <div className="relative flex w-full lg:mt-20  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative lg:w-[800px] w-1/3 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        alt="image"
                        className="object-cover lg:w-full h-full"
                    />
                </div>
                <div className="p-6 lg:ml-14 lg:mt-24">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">

                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {description}
                    </h4>
                    <p className="block   text-base antialiased font-semibold mb-2 leading-relaxed text-gray-700">
                        <span className="text-xl">Price per Night:</span> <span className="text-xl">{price_per_night}</span>
                    </p>
                    <p className="text-xl font-semibold mb-2">Room Size: {room_size}</p>
                    <p className="text-xl font-semibold mb-2">Availability: {availability}</p>
                    {/* <p>Availability: {availability}</p> */}
                    <p className="text-xl font-semibold">Special Offer: {special_offer}</p>


                    <form onSubmit={handleBookService}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl">Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                        </div>                    
                            <div className="form-control mt-6 lg:w-[200px]">                  
                            <input className="btn btn-primary btn-block" type="submit" value="Book Now" />
                        </div> 
                        

                    </form>
                </div>


            </div>





            <div className="card-body">

            </div>
        </div>





    );
};

export default Details;