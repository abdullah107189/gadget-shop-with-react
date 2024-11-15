import { useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { loginUserInEmailAndPass, createUserInGoogle } = useContext(AuthContext)
    const navigate = useNavigate();
    // const handleLogin = (e) => {
    //     e.preventDefault()
    //     const form = new FormData(e.target)
    //     const email = form.get('email')
    //     const password = form.get('password')
    //     console.log({ email, password });
    //     // loginUserInEmailAndPass(email, password)
    //     //     .then(res => {
    //     //         console.log(res.user);
    //     //     })
    //     //     .catch(err => {
    //     //         console.log(err.message);
    //     //     })
    // }
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
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <h1 className="text-3xl font-bold text-center">Login Section</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleLogin} className="btn btn-primary">Login</button>
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