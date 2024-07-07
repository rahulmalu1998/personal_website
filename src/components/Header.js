import React from "react";
import image from "./imageHeader.jpg"; // Tell webpack this JS file uses this image

const Header = () => {
  return (
    <header>
      <nav>
        <h1>
          <img src={image} alt="Header Image" /> Rahul Malu
        </h1>
      </nav>
    </header>
  );
};

export default Header;
