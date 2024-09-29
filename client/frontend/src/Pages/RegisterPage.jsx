import "./RegisterPage.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { db, auth } from "../../firebase/firebaseConfig"
//import { collection, addDoc } from "firebase/firestore";
//import { getDatabase, ref, set } from "firebase/database";
//import axios from 'axios'

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    gender: "",
    height: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, [])


  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      localStorage.setItem('userData', JSON.stringify(formData));
      alert("user created succesfully");
      navigate('/LoginPage');
      /*
      // Step 1: Register user with Firebase Authentication

      const response = await axios.post('http://localhost/api/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 201) {
        alert(response.data.message);
        navigate('/LoginPage');
      }
      */

    } catch (error) {
      console.error("Error adding user", error);
      alert(error.message);
    }
  };

  return (
    <div>
      <h1>
        <span style={{ color: "green" }}>Med</span>
        <span style={{ color: "#dddaa4" }}>Health</span>
      </h1>

      <div className="login-wrap">
        <div className="card">
          <form className="login-form" onSubmit={handleSubmit}>
            <p className="title">Create an Account</p>
            <div className="flex">
              <input className="help" placeholder="First Name" type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
              <input className="help" placeholder="Last Name" type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div> <br />

            <div className="flex">
              <input className="help" placeholder="Age" type="number" name="age" value={formData.age} onChange={handleChange} />
              <input className="help" placeholder="Weight (kg)" type="number" />
            </div><br />

            <div className="flex">
              <input className="help" placeholder="Gender" type="text" name="gender" value={formData.gender} onChange={handleChange} />
              <input className="help" placeholder="height (cm)" type="number" name="height" value={formData.height} onChange={handleChange} />
            </div><br />

            <input className="size" placeholder="Email" type="email" name="email" value={formData.email} onChange={handleChange} /><br />

            <input className="size" placeholder="Password" type="password" name="password" value={formData.password} onChange={handleChange} /><br />

            <div>
              <button className="size btn" type="submit"> Sign Up </button>
              <p className="signin"> Already have an account ? <a href="/LoginPage">Sign in</a>{" "}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterPage;
