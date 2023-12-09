import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

    }

    const Navlinks = <>
        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
        <li className="text-xl"><NavLink to='/rooms'>Rooms</NavLink></li>
        <li className="text-xl"><NavLink to='/myBookings'>My Bookings</NavLink></li>
        <li className="text-xl"><NavLink to='/contactUs'>Contact Us</NavLink></li>
        <li className="text-xl"><NavLink to='/aboutUs'>About Us</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-xl lg:px-4 rounded-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>

                <div className="flex lg:flex-row flex-col ">
                    <img className="w-16 h-16 rounded-full shadow-xl" src="https://i.ibb.co/F3ZNgw1/166f73ab4a3d7657e67b4ec1246cc2d6.jpg" alt="" />
                    <a className=" btn btn-ghost normal-case text-xl">Hotel Room</a>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>

            <div className="navbar-end">
                {user && <div className="lg:flex items-center ml-10 lg:mr-3">
                    <img className=" h-10 rounded-full mr-2" src={user?.photoURL} alt="" />
                    <h3>{user.displayName}</h3>

                </div>}
                {
                    user ? <button onClick={handleSignOut} className="btn btn-error">Log Out</button> : <button className="btn btn-error"><Link to='/login'>Login</Link></button>
                }

            </div>
        </div>

    );
};

export default Navbar;