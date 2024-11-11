import { useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { createUserInGoogle } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLoginWithGoogle = () => {
        createUserInGoogle()
            .then(res => {
                console.log(res);
                Swal.fire({
                    title: "Login done !",
                    text: "Login using google",
                    icon: "success"
                });
                navigate('/')
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
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
        </div>
    );
};

export default Login;