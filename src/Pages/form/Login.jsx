import { useContext, useState, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";
import successLogin from '../../assets/verified.gif'

const Login = () => {
    const [passwordShow, setPasswordShow] = useState(false)
    const [RegSuccess, setRegSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
    const { loginUserInEmailAndPass, createUserInGoogle } = useContext(AuthContext)

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        setLoading(true)
        loginUserInEmailAndPass(email, password)
            .then(() => {
                setLoading(false)
                setRegSuccess(true)
                Swal.fire({
                    title: "Login done !",
                    text: "Well come to our shop",
                    icon: "success"
                });
                e.target.reset()
                navigate(from, { replace: true });
            })
            .catch(err => {
                setLoading(false)
                toast.error(err.message)
            })
    }
    const handleLoginWithGoogle = () => {
        createUserInGoogle()
            .then(() => {
                Swal.fire({
                    title: "Login done !",
                    text: "Login using google",
                    icon: "success"
                });
                navigate('/')
            })
            .catch(err => toast.error(err.message))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login Section</h1>
                    {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
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
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">  {loading ? (<span className="loading loading-spinner text-white"></span>) : RegSuccess ? (<img className="w-10 object-contain rounded-md" src={successLogin} alt="" />) : ('Login')}</button>
                    </div>
                    <div className="grid grid-cols-2 w-full gap-2">
                        <button onClick={handleLoginWithGoogle} className="btn btn-primary">Google</button>
                        <button className="btn btn-primary">Github</button>
                        <button className="btn btn-primary">Facebook</button>
                        <button className="btn btn-primary">X(twitter) </button>
                    </div>
                    <p>Are you new user then <Link className="btn-link" to={'/reg'}>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;