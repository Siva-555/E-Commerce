import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCarousel from "../../utils/ProductCarousel/ProductCarousel";
import { getProductsByCategory } from "../../apis/api";

const WomenProducts = () => {
  const [womenProds, setWomenProds] = useState([]);

  useEffect(() => {
    getProductsByCategory("womens-dresses").then((res) => {
      // console.log(res);
      if (res.status === 200) {
        setWomenProds(res.data.products);
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
        <h2>Women</h2>
        <h6>
          <Link
            to={{
              pathname: "/filter-products",
              search:
                "?q=womens-dresses,womens-shoes,womens-watches,womens-bags,womens-jewellery",
            }}
            style={{ textDecoration: "none" }}
          >
            View all
          </Link>
        </h6>
      </div>
      <div>
        <ProductCarousel products={womenProds} />
      </div>
    </div>
  );
};

export default WomenProducts;
