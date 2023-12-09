
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ShowBooking from "./ShowBooking";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";


const MyBookings = () => {
    const { user } = useContext(AuthContext)

    const [bookings, setBookings] = useState([])

    const url = `https://hotel-room-server.vercel.app/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url,{credentials: 'include'})
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (id) => {
       

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
          

            fetch(`https://hotel-room-server.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                                 title: "Deleted!",
                                 text: "Your booking has been deleted.",
                                icon: "success"
                              });
                        const remaining = bookings.filter(bookings => bookings._id !== id)
                        setBookings(remaining)
                    }
                })

            }
          });
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-5xl font-bold text-center mt-4 mb-8 lg:mt-8 lg:mb-10">My Total Bookings: {bookings.length}</h2>


            <div className=" grid lg:grid-cols-1  space-y-4 lg:mb-20">
                {
                    bookings.map(booking => <ShowBooking key={booking._id} booking={booking} handleDelete={handleDelete}></ShowBooking>)
                }

            </div>
        </div>
    );
};

export default MyBookings;