import React from "react";

const FeatureItem = (props) => {
  const { title, desc } = props;
  return (
    <div style={{ width: "50%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: 10,
        }}
      >
        <div style={{ marginLeft: "15%" }}>{props.children}</div>
        <div style={{ margin: "15px" }}>
          <strong style={{ color: "white" }}>{title}</strong>
          <br />
          <span style={{ fontSize: "14px" }}>{desc}</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
