import React from "react";
// components
import MobileSearch from "../../components/nav/MobileSearch";
import ProductList from "../../components/productList/ProductList";
import Slider from "../../components/slider/slider";
import SingleCategory from "../../components/singleCategory/SingleCategory";
import Category from "../../components/category/Category";
import Exclusive from "../../components/exclusive/Exclusivee";
// redux toolkit
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCategories, getProductsByCategory } from "../../store/categorySlice";
import { getProducts } from "../../store/productSlice";

// take note of the renaming like data, status, catgegoryproductall, 


const Home = () => {
  const dispatch = useDispatch();
  // catgeories all main
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  // catgeries by products
  const { categoryProductAll: productsByCategory, categoryProductAllStatus } = useSelector((state) => state.category);
    // products under category
  const {data: products, status: productStatus} = useSelector((state) => state.product);


  useEffect(() => {
    dispatch(getProducts())
    dispatch(getCategories());
    dispatch(getProductsByCategory(1, "all"));
    dispatch(getProductsByCategory(2, "all"));
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MobileSearch />
      <div className="relative h-[65vh] lg:h-[90vh]">
        <Slider />
      </div>
      <div className="container mx-auto">
        <Category categories={categories} status={categoryStatus} />
        <ProductList  products = {products} status = {productStatus} />
      </div>

      <section>
        <h1 className="container mx-auto uppercase text-2xl font-semibold">new products</h1>
        {productsByCategory[0] && < SingleCategory products = {productsByCategory[0]} status = {categoryProductAllStatus} />}
      </section>

      <section>
      <h1 className="container mx-auto uppercase text-2xl font-semibold">urban</h1>
      {productsByCategory[1] && < SingleCategory products = {productsByCategory[1]} status = {categoryProductAllStatus} />}
      </section>

      <section>
      <h1 className="container mx-auto uppercase text-2xl font-semibold">accessories</h1>
      {productsByCategory[2] && < SingleCategory products = {productsByCategory[2]} status = {categoryProductAllStatus} />}
      </section>
      
      <Exclusive />

    
    </div>
  );
};

export default Home;
