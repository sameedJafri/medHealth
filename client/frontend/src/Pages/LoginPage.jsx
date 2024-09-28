//import React, { useState } from "react";
import './LoginPage.css';


function LoginPage() {

    return (
        <div>
            <h1><span style={{color:"green"}}>Med</span><span style={{color:"#dddaa4"}}>Health</span></h1>
        <div className="login-wrap">
            <div className="card">
                <form className="login-form" >
                    <p className="title">Login</p>
                    <div className="userinfo">
                        <input placeholder="Email" type="email" />
                    </div>
                    <div className="userinfo">
                        <input placeholder="Password" type= "password" />
                    </div>
                    <input type="submit" value="LogIn" className="btn" /><br/>
                    <input type="submit" value="SignUp" className="btn" />
                    <p className="login">Forgot Your Password? <a href="/RegisterPage">Retrive Password</a></p>
                </form>
            </div>

        </div>
        </div>
    );
}
export default LoginPage;