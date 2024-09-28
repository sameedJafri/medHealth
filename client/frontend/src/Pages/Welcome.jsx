//import React, { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Welcome.css';


function LoginPage() {

    const navigate = useNavigate(); // Declare useNavigate at the top level of the component

    const handleRegisterClick = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Now use the navigate function
        navigate('/RegisterPage'); // Redirect to the Register page
    };

        return (
            
            <div>
                Welcome page<br/>
                <a href="/RegisterPage">Register</a><br/>
                <a href= "/LoginPage">Login</a>
                
            </div>
        );
    }

export default LoginPage;