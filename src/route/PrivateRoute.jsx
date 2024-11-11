import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
    const { istLoading, user } = useContext(AuthContext)
    if (istLoading) {
        return <div className="flex items-center justify-center ">
            <span className="loading loading-dots w-[200px]"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;