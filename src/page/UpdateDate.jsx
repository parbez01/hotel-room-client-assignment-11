import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const UpdateDate = () => {

    const { user } = useContext(AuthContext)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const update = {
            customerName: name,
            email,
            image,
            date,
            service: description,
            service_id: _id,
            price: price_per_night,
        }
        console.log(update);

        fetch(`https://hotel-room-server.vercel.app/bookings/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Booking Date updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    const update = useLoaderData()
    const { image, _id, description, price_per_night, room_size, availability, special_offer, service, price, date, email } = update;

    return (
        <div>

            <h1 className="text-4xl font-bold text-center mt-10 mb-16">Update Date from here</h1>

            <div className="bg-[#F4F3F0] lg:w-[600px] ml-[500px] p-10">

                <form onSubmit={handleUpdate}>


                    <div className="grid ">
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" defaultValue={date} className="input input-bordered" required />

                        </div>

                       
                    </div>


                    <div className="form-control mt-6">

                        <input className="btn btn-primary btn-block" type="submit" value="Update" />
                    </div>

                </form>
            </div>


        </div>
    );
};

export default UpdateDate;