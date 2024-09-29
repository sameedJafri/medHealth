import "./RegisterPage.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../firebase/firebaseConfig"
import { collection, addDoc } from "firebase/firestore";
import axios from 'axios'

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
      // Step 1: Register user with Firebase Authentication

      const response = await axios.post('http://localhost:8080/api/auth/register', {
        ...formData
      });

      console.log('res', response.data)


      /*createUserWithEmailAndPassword(
        clientAuth,
        formData.email,
        formData.password
      );*/

      // Step 2: Get the registered user's unique ID
      const userId = response.data.userCredential.user.uid;

      // Step 3: Save user data to Firestore, excluding the password for security reasons
      const usersCollectionRef = collection(db, "users");
      await addDoc(usersCollectionRef, {
        uid: userId,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        weight: formData.weight,
        gender: formData.gender,
        height: formData.height,
        email: formData.email,
      });

      alert("User created successfully");
      navigate("/LoginPage");

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
