import "./RegisterPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase /firebaseConfig"
import { useNavigation } from "react-router-dom";

function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    weight: "",
    gender: "",
    height: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

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
      // saving data to firebase
      const response = await db.collection("users").add(formData);
      alert("User created successfully");
      navigate("/LoginPage");
      //console.log("User added successfully", response);
      navigate("/LoginPage");
    } catch (error) {
      console.error("Error adding user", error)
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
          <form className="login-form">
            <p className="title">Create an Account</p>
            <div className="flex">
              <input className="help" placeholder="First Name" type="text" />
              <input className="help" placeholder="Last Name" type="text" />
            </div> <br />

            <div className="flex">
              <input className="help" placeholder="Age" type="number" />
              <input className="help" placeholder="Weight (kg)" type="number" />
            </div><br />

            <div className="flex">
              <input className="help" placeholder="Gender" type="text" />
              <input className="help" placeholder="height (cm)" type="number" />
            </div><br />

            <input className="size" placeholder="Email" type="email" /><br />

            <input className="size" placeholder="Password" type="password" /><br />

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
