import "./Home.css";
import React from "react";
import NavBar from "./Components/NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <h1 id="Tpage">(FIRST LAST name)'s Profile</h1>
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
          {" "}
          Gender:
        </div>
        <div className="grid-item">
          Age:
        </div>
        <div className="grid-item">
          Height:
        </div>
        <div className="grid-item">
          Weight:
        </div>
      </div>
    </div>
  );
}
export default Home;