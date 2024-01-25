import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ProductCarousel from "../../utils/ProductCarousel/ProductCarousel";

import { getProductsByCategory } from "../../apis/api";

const FurnitureProduts = () => {
  const [furProducts, setFurProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsByCategory("furniture").then((res) => {
      // console.log(res);
      if (res.status === 200) {
        setFurProducts(res.data.products);
      }
    });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>Furniture</h2>
        <h6>
          <Link
            to={{
              pathname: "/filter-products",
              search: "?q=furniture",
            }}
            style={{ textDecoration: "none" }}
          >
            View all
          </Link>
        </h6>
      </div>
      <div>
        <ProductCarousel products={furProducts} />
      </div>
    </div>
  );
};

export default FurnitureProduts;
