import React from "react";

import {
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Layout } from "antd";
const { Sider } = Layout;

const FilterCategories = ({ allCategories, setSearchParams }) => {
  const formCategories = allCategories.categories.map((ele, index) => {
    return (
      <FormControlLabel
        key={index}
        control={
          <Checkbox
            value={ele}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        }
        label={ele}
      />
    );
  });
  return (
    <Sider
      width={250}
      style={{
        overflow: "auto",
        height: "80vh",
        position: "relative",
        backgroundColor: "#d3d3d3",
        marginTop: "5px",
        borderRadius: "8px",
      }}
    >
      <div style={{ marginLeft: "30px", marginTop: "10px" }}>
        <FormControl>
          <FormLabel
            sx={{ fontWeight: "600", fontSize: "24px", marginLeft: "20px" }}
            component="fieldset"
            variant="standard"
          >
            Category
          </FormLabel>
          <FormGroup sx={{ my: 2 }}>{formCategories}</FormGroup>
        </FormControl>
      </div>
    </Sider>
  );
};

export default FilterCategories;
