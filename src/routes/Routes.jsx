import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home";
import Rooms from "../page/Rooms";
import MyBookings from "../page/myBookings";
import Login from "../page/Login";
import Register from "../page/Register";
import PrivateRoute from "./PrivateRoute";
import Details from "../components/Details";
import UpdateDate from "../page/UpdateDate";
import ErrorPage from "../page/ErrorPage";
import Contact from "../components/Contact";
import About from "../components/About";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>
            },
            {
                path: '/myBookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: '/aboutUs',
                element: <About></About>

            },
            {
                path: 'details/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://hotel-room-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <UpdateDate></UpdateDate>,
                loader: ({ params }) => fetch(`https://hotel-room-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])
export default router;