import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../apis/api";

import FilterCategories from "../components/Sidebar/FilterCategories";

const FilterProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterCategories, setFilterCategories] = useState([]);
  const [allCategories, setAllCategories] = useState({
    categories: [],
    loading: false,
  });

  useEffect(() => {
    getCategories().then((res) => {
      if (res.status == 200) {
        setAllCategories((prev) => {
          return { ...prev, categories: res.data };
        });
      }
    });
  }, []);
  useEffect(() => {
    let queryParams = searchParams.get("q");
    let categories = queryParams ? queryParams.split(",") : [];

    setFilterCategories(categories);

    console.log(categories);
  }, [searchParams]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <FilterCategories
        allCategories={allCategories}
        setSearchParams={setSearchParams}
      />
      <h1>heelo</h1>
    </div>
  );
};

export default FilterProductsPage;
