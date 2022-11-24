import React from "react";
import { Link } from "react-router-dom";

// redux
import { getCategories } from "../../store/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SearchCart from "./SearchCart";

// this displays the varios header product categories

const Home = () => {
  const dispatch = useDispatch();
  const { data: categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div className="w-full bg-gray-900">
        <div className="container mx-auto flex">
          <ul className="grid w-full grid-cols-3 gap-y-4 gap-x-3 py-2 lg:flex lg:flex-row">
            {categories.map((category) => (
              <li
                key={category.id}
                className="rounded-md bg-gray-500 px-2 py-1 text-center text-xs lg:text-sm text-white hover:bg-gray-700 hover:text-white"
              >
                <Link to={`category/${category.id}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <>
        <SearchCart />
      </>
    </>
  );
};

export default Home;
