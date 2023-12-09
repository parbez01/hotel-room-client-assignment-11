import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {

    const [registerError, setRegisterError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setRegisterError('Password is less than 6 characters')
            // toast.error("This didn't work.")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setRegisterError('Your password should have at least one special character.')
            return;
        }
        // reset error
        setRegisterError('')
        setSuccessMessage('')

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            toast.success('Successfully Registration!')
            // navigate(location?.state ? location.state : '/')
        })
        .catch(error => {
            console.error(error)
            setRegisterError(error.message)
        })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div>

                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="mr-10 w-1/2 ">

                        </div>
                        <div className="card flex-shrink-0 w-full max-w-xl border-2 p-10 border-[#D0D0D0] bg-base-100">
                            <form onSubmit={handleRegister} className="card-body">
                                <h1 className="text-center text-4xl text-[#444] font-semibold">Registration</h1>

                                {/* <form onSubmit={handleRegister}> */}

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">

                                    <button className='btn btn-error'>Registration</button>
                                    {/* <input className="btn btn-error" type="button" value="Registration" /> */}
                                </div>

                                {/* </form> */}

                                {/* <div>
                    <p className="text-center text-lg font-medium mt-2">Or Login with</p>
                    <div className='lg:ml-[200px] lg:mt-2'>
                        <img className='h-10 bg-gray-200 rounded-full' src="https://i.ibb.co/9qJzmNK/7611770.png" alt="" /></div>
                </div> */}

                                {
                                    registerError && <p className="text-red-600 text-xl text-center mt-10">{registerError}</p>
                                }
                                {
                                    successMessage && <p className="text-green-600 text-xl text-center mt-10">{successMessage}</p>
                                }

                                <p className='text-center mt-4'>You Have already account? <Link to='/login'><span className='text-lg text-[#FF3811] font-semibold'>Login</span></Link> </p>

                            </form>

                            <div>
                                <div>
                                    <Toaster
                                        position="top-center"
                                        reverseOrder={false}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Register;