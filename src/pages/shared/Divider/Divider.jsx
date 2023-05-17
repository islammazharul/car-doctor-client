import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";


const Divider = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="text-center">
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className=" btn btn-circle btn-outline">
                G
            </button>
        </div>
    );
};

export default Divider;