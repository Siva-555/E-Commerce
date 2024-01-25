import React from "react";
import "./ProductCard.css";
import { Paper } from "@mui/material";
import { FaStar } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";

const ProductCard = ({ productData }) => {
  const discountedPrice = Math.round(
    productData.price -
      (productData.price * Math.round(productData.discountPercentage)) / 100
  );
  return (
    <Paper elevation={0} id="product-card-container">
      <a href="" style={{ width: "100%" }}>
        <div
          className="prd-image-container"
          style={{
            width: "100%",
            textAlign: "center",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            className="product-img"
            src={productData.thumbnail}
            style={{ objectFit: "cover", height: 200, width: "70%" }}
          />
          <div
            className="product-overlay"
            style={{
              height: 200,
            }}
          >
            <RiExternalLinkLine size="24px" />
          </div>
        </div>
      </a>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: 10,
        }}
      >
        <div
          style={{
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          {productData.brand}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
          }}
        >
          <FaStar size={14} color="#3394ed" />

          <span>{Math.round(productData.rating)}</span>
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          paddingInline: 10,
          fontWeight: "500",
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textTransform: "capitalize",
          textOverflow: "ellipsis",
        }}
      >
        {productData.title}
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          paddingInline: 10,
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textTransform: "capitalize",
          textOverflow: "ellipsis",
        }}
      >
        <span
          style={{
            alignSelf: "flex-start",
            fontWeight: "600",
          }}
        >
          &#36;{discountedPrice}
        </span>{" "}
        <span
          style={{
            alignSelf: "flex-start",
            fontWeight: "400",
            padding: 2,
            fontSize: "14px",
            textDecorationLine: "line-through",
            textDecorationColor: "#29272b",
            textDecorationThickness: "1px",
          }}
        >
          &#36;{productData.price}
        </span>{" "}
        <span
          style={{
            alignSelf: "flex-start",
            fontWeight: "400",
            padding: 2,
            fontSize: "14px",
            color: "red",
          }}
        >
          ({Math.round(productData.discountPercentage)}% OFF)
        </span>
      </div>
    </Paper>
  );
};

export default ProductCard;
