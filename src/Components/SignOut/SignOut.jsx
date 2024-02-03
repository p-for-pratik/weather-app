import { signOut } from "firebase/auth";
import React from "react";
import { auth } from '../../firebase';
import { useNavigate } from "react-router-dom";

function SignOut(){
    const history = useNavigate()

    const handleClick = () =>{
        signOut(auth).then(val=>{
            console.log(val,"val")
            history('/')
        })
    }
    return(
        <div>
            <button onClick={handleClick}>SignOut</button>
        </div>
    )
}
export default SignOut;