import { useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";

import ProductCarousel from "../../utils/ProductCarousel/ProductCarousel";

import { getProductsByCategory } from "../../apis/api";

const MenProducts = () => {
  const [menProducts, setMenProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsByCategory("mens-shirts").then((res) => {
      // console.log(res);
      if (res.status === 200) {
        setMenProducts(res.data.products);
      }
    });
    // setTimeout(() => {
    // }, 5000);
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
        <h2>Men</h2>
        <h6>
          <Link
            to={{
              pathname: "/filter-products",
              search: "?q=mens-shirts,mens-shoes,mens-watches",
            }}
            style={{ textDecoration: "none" }}
          >
            View all
          </Link>
        </h6>
      </div>
      <div>
        <ProductCarousel products={menProducts} />
      </div>
    </div>
  );
};

export default MenProducts;
