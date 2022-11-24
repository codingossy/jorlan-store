import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getProductsByCategory } from "../../store/categorySlice";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    categoryProductSingle: products,
    categoryProductSingleStatus: status,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProductsByCategory(id, 'single'))
  }, [id])

  return <section className="py-10">

  </section>;
};

export default CategoryPage;
