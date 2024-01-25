import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProductsByCategory = async (category) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/products/category/${category}`
    );
    // console.log("API - ", response);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/products/categories`);
    return response;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};
