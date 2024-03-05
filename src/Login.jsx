
import React from "react";
import LoginCOMP from "./LoginComp";
import SignCOMP from "./SignComp";
import './Login.css'


const Login = ()=>{
    return(
    
        <div className="log"> 
            <h1 class="login"> LOGIN PAGE</h1>
            <LoginCOMP />
            <br /><br />
            <SignCOMP />
        </div>
    )

}
export default Login