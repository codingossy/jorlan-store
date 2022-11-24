import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductList from "../../components/productList/ProductList";
import { getProductsByCategory } from "../../store/categorySlice";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    categoryProductSingle: products,
    categoryProductSingleStatus: status,
  } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getProductsByCategory(id, "single"));
  }, [id]);

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div>
          <h4 className="font-semibold capitalize">categories</h4>
        </div>

        <div className="font-semibold text-blue-500">
          {products[0] && products[0].category.name}
        </div>
      </div>

      {/* leads to the product list section which is displayed */}
      <ProductList products={products} status={status} />
    </section>
  );
};

export default CategoryPage;
