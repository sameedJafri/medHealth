
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './Components/NavBar';
import './LoginPage.css';
import axios from 'axios';


function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Declare useNavigate at the top level of the component

    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            // Make an API call to the backend to authenticate the user
            const response = await axios.post('/api/auth/login', {
                email,
                password,
            });

            // Store the access token (if necessary)
            if (response.data && response.data.userCredential) {
                localStorage.setItem('access_token', response.data.userCredential._tokenResponse.idToken);
                console.log('User logged in successfully');

                // Navigate to the Home page after successful login
                navigate('/Home');
            } else {
                setError('Unexpected response from server');
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Invalid email or password. Please try again.');
        }
    };

    const handleRegisterClick = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        // Now use the navigate function
        navigate('/RegisterPage'); // Redirect to the Register page
    };

    return (

        <div>
            <NavBar />
            <h1><span style={{ color: "green" }}>Med</span><span style={{ color: "#dddaa4" }}>Health</span></h1>
            <div className="login-wrap">
                <div className="card">
                    <form className="login-form" >
                        <p className="title">Login</p>
                        <div className="userinfo">
                            <input className="input_" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="userinfo">
                            <input placeholder="Password" type="password" className="input_" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <input type="submit" value="LogIn" className="btn_" /><br />
                        <input type="submit" value="SignUp" className="btn_" onClick={handleRegisterClick} />
                        <p className="login">Forgot Your Password? <a href="/RegisterPage"> Retrieve Password</a></p>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default LoginPage;