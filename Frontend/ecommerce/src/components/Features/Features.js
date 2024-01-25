import React from "react";

import FeatureItem from "./FeatureItem";

import { Paper } from "@mui/material";

import { FaShippingFast } from "react-icons/fa";
import { RiCustomerServiceLine } from "react-icons/ri";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoGiftSharp } from "react-icons/io5";

const Features = () => {
  return (
    <div style={{ padding: 20 }}>
      <Paper
        elevation={10}
        sx={{
          width: "100%",
          height: "auto",
          background: "var(--feature-bg-color)",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "24px",
        }}
      >
        <FeatureItem
          title="Fast and Free Delivery"
          desc="Free delivery for all orders above $140"
        >
          <FaShippingFast size={60} color="#e9cbf7" />
        </FeatureItem>

        <FeatureItem
          title="24/7 Customer Support"
          desc="Friendly 24/7 customer support"
        >
          <RiCustomerServiceLine size={60} color="#e9cbf7" />
        </FeatureItem>

        <FeatureItem
          title="Money Back Guarantee"
          desc="We return money within 14 days"
        >
          <GiTakeMyMoney size={60} color="#e9cbf7" />
        </FeatureItem>
        <FeatureItem title="Members Gifts" desc="Discount coupons weekends">
          <IoGiftSharp size={60} color="#e9cbf7" />
        </FeatureItem>
      </Paper>
    </div>
  );
};

export default Features;
