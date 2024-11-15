import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import successLogin from '../../assets/verified.gif'
import Swal from "sweetalert2";

const Register = () => {
    const [passwordShow, setPasswordShow] = useState(false)
    const [confirmShow, setConfirmShow] = useState(false)
    const [RegSuccess, setRegSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { createUserInEmailAndPass, serUserNameAndPhoto } = useContext(AuthContext)
    const handleRegForm = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const photoURl = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        const confirm = form.get('confirm')

        if (password.length <= 5) {
            return toast.error('at least set 6 charecter !');
        }
        if (password !== confirm) {
            return toast.error('please match the password')
        }
        setLoading(true)
        createUserInEmailAndPass(email, password)
            .then(() => {
                serUserNameAndPhoto(name, photoURl)
                    .then(() => {
                        setLoading(false)
                        setRegSuccess(true)
                        Swal.fire({
                            title: "Register done !",
                            text: "Well come to our shop",
                            icon: "success"
                        });
                        e.target.reset()
                        navigate('/')
                    })
                    .catch(err => {
                        setLoading(false)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Toaster position="top-right"></Toaster>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegForm} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Registration Section</h1>
                    {/* name  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your name" className="input input-bordered" required />
                    </div>
                    {/* photoUrl */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input name="photoURL" type="text" placeholder="Photo url" className="input input-bordered" required />
                    </div>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Your email" className="input input-bordered" required />
                    </div>
                    {/* password */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input name="password" type={`${passwordShow ? 'text' : 'password'}`} placeholder="Set your password" className="input input-bordered w-full" required />
                            <span onClick={() => setPasswordShow(!passwordShow)} className="absolute right-2 bottom-2 p-2 hover:bg-gray-200 rounded-full cursor-pointer">{
                                passwordShow ? <FaEyeSlash /> : <FaEye />
                            }</span>
                        </div>

                    </div>
                    {/* confirm */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm</span>
                        </label>
                        <div className="relative">
                            <input name="confirm" type={`${confirmShow ? 'text' : 'password'}`} placeholder="Confirm your password" className="input input-bordered w-full" required />
                            <span onClick={() => setConfirmShow(!confirmShow)} className="absolute right-2 bottom-2 p-2 hover:bg-gray-200 rounded-full cursor-pointer">{
                                confirmShow ? <FaEyeSlash /> : <FaEye />
                            }</span>
                        </div>

                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">  {loading ? (<span className="loading loading-spinner text-white"></span>) : RegSuccess ? (<img className="w-10 object-contain rounded-md" src={successLogin} alt="" />) : ('Registration')}</button>
                    </div>
                    <p>You have and Account then <Link className="btn-link" to={'/login'}>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;