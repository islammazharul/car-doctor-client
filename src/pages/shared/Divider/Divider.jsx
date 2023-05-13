import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Divider = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                console.log(res.user)
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