import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ 'background-color': '#130c38' }}>
      <div className="headerContainer">
        <h1> PRAISE HIM </h1>
        <p> FASHION FOR GOOD </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
