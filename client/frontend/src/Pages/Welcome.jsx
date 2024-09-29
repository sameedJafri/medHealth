//import React, { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function LoginPage() {
    const navigate = useNavigate(); // Declare useNavigate at the top level of the component

    const handleRegisterClick = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Now use the navigate function
        navigate("/RegisterPage"); // Redirect to the Register page
    };

    return (
        <div style={{ marginBottom: "50px", marginTop: "50px", marginLeft: "250px", width: "1000px", textAlign: "center" }}>
            <h3 style={{ marginBottom: "50px" }}>Welcome to</h3>
            <h1 style={{ marginBottom: "50px" }}>
                <span style={{ color: "green" }}>Med</span>
                <span style={{ color: "#dddaa4" }}>Health</span>
            </h1>
            <div>

                <div style={{ marginBottom: "50px" }}><p >MedHealth's mission is to help individual's to improve themselves by
                    allowing them to track their health status. This web app is built to
                    monitor the mental health status of an individual and organize the
                    intake of their prescription. Singn up to explore the different
                    features offered by MedHealth.{" "}</p></div>

                <a href="/RegisterPage">
                    <input style={{ marginRight: "20px" }} type="submit" value="SignUp" className="btn_" />
                </a>
                <a href="/LoginPage">
                    <input style={{ marginLeft: "20px" }} type="submit" value="LogIn" className="btn_" />
                </a>
            </div>
        </div>
    );
}

export default LoginPage;
