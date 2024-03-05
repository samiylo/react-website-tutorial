import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ 'background-color': '#130c38' }}>
      <div className="headerContainer">
      <h1 style={{ color: "white" }}>PRAISE HIM</h1>
        <p style={{ color: "white" }}> FASHION FOR GOOD </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
