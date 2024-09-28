import React, { useState } from "react";
import FormInput from './Components/Forms/FormInput';
import './LoginPage.css';

function LoginPage() {

    return (
        <div className="login-wrap">
            <div className="card">
                <form className="login-form" onSubmit={(e) =>Login(e)}>
                    <p className="title">Login </p>
                    <div className="userinfo">
                        <FormInput fieldName={"Email"} fieldType={"email"} setField={setEmail} />
                    </div>
                    <div className="userinfo">
                        <FormInput fieldName={"Password"} fieldType={"password"} setField={setPassword} />
                    </div>
                    <div className = "error-message">
                    {message && <p>{message}</p>}
                    </div>
                    <input type="submit" value="Login" className="btn" />
                    <p className="forgotPassword"> <a href="/home">Forgot password</a> </p>
                    <p className="login">Don't have an account? <a href="/registerAccount">Create Account</a> </p>
                </form>
            </div>
            
        </div>
    );
}
export default LoginPage;