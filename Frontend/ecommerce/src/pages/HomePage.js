import React from "react";
import "./HomePage.css";
import { Button } from "@mui/material";

import MenProducts from "../components/Products/MenProducts";
import WomenProducts from "../components/Products/WomenProducts";
import FurnitureProduts from "../components/Products/FurnitureProduts";

import Home_Image from "../assets/home-image-1.jpg";

const HomePage = () => {
  return (
    <div
      className="container my-3"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="image-container" style={{ width: "100%" }}>
        <img src={Home_Image} alt="" className="home-img" />
        <div className="Image-overlay">
          <h4>Up To 50% Off</h4>
          <h6>Shop our End Of Season Sale and gift yourself comfy styles.</h6>
          <Button
            variant="contained"
            color="secondary"
            className="mt-3"
            disableElevation
          >
            Shop the Sale
          </Button>
        </div>
      </div>
      <div className="mt-3">
        <MenProducts />
      </div>
      <div className="mt-3">
        <WomenProducts />
      </div>
      <div className="mt-3">
        <FurnitureProduts />
      </div>
      <div className="mt-3">
        <Button
          variant="contained"
          color="info"
          fullWidth
          sx={{ borderRadius: "24px" }}
        >
          Shop All
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
