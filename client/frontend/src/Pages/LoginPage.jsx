//import React, { useState } from "react";
import './LoginPage.css';
import './RegisterPage'

function LoginPage() {

    return (
        <div className="login-wrap">
            <div className="card">
                <form className="login-form" >
                    <p className="title">Login</p>
                    <div className="userinfo">
                        <input type="email" />
                    </div>
                    <div className="userinfo">
                        <input type= "password" />
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <p className="login">Don't have an account? <a href="/RegisterPage">Create Account</a></p>
                </form>
            </div>
            
        </div>
    );
}
export default LoginPage;