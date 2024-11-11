import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="p-10 text-center">
            <button onClick={()=>navigate('/')} className="pinkOutletBtn">Back To Home</button>
            <h1 className='text-4xl font-bold'>404 page not found</h1>
        </div>
    );
};

export default ErrorPage;