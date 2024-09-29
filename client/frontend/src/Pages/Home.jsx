import "./Home.css";
import React, { useEffect, useState } from "react";
import NavBar from "./Components/NavBar";
import { db, auth } from "../../firebase/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    // Listen for auth state changes to detect if a user is logged in
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const userId = user.uid;
          const userDocRef = doc(db, "users", userId);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user found. Please log in.");
      }
      setLoading(false);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userData) {
    // hard code a layout if possible
    return <ul>
      <li> name: bob joe</li>
      <li> age: 20 </li>
      <li> weight </li>
      <li> height </li>
      <li> gender </li>
    </ul>

    //return <div> No user data found </div>
  }

  return (
    <div>
      <NavBar />
      <h1 id="Tpage">{`${userData.firstName} ${userData.lastName}`}'s Profile </h1>
      <div className="grid-container">
        <div className="grid-item; item1">
          <div className="image-container">
            <img
              src="https://i.etsystatic.com/13930930/r/il/0639f3/3128602685/il_fullxfull.3128602685_k8oe.jpg"
              alt="Plante"
              className="responsive-image"
            />
          </div>
        </div>

        <div className="grid-item">
          Gender: {userData.gender}
        </div>
        <div className="grid-item">
          Age: {userData.age}
        </div>
        <div className="grid-item">
          Height: {userData.height} cm
        </div>
        <div className="grid-item">
          Weight: {userData.weight} kg
        </div>
      </div>
    </div>
  );
}
export default Home;