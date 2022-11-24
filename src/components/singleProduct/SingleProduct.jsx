import React from "react";
import { useState } from "react";
import {
  AiFillShopping,
  AiOutlineClose,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
// redux
import { AddToCart } from '../../store/cartSlice'
import { useSelector, useDispatch } from "react-redux";
// router
import { useNavigate } from "react-router-dom";
import { setIsModalShowing } from "../../store/modalSlice";
// css
import "./SingleProduct.css";



const SingleProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // to handle each quantity
  const [quantity, setQuantity] = useState(1);
  // slice redux
  const { data: product } = useSelector((state) => state.modal);

  // to decreace quantity on a product
  const decreaseQuantityOfProduct = () => {
    setQuantity((PreviousQuantity) => {
      let newQuantity = PreviousQuantity - 1;
      if (newQuantity < 1) {
        newQuantity = 1;
      }
      return newQuantity;
    });
  };

  // to increase quantity on each product
  const increaseQuantityOfProduct = () => {
    setQuantity((PreviousQuantity) => {
      let newQuantity = PreviousQuantity + 1;
      return newQuantity;
    });
  };
  // modal to show
  const modalOverlay = (e) => {
    if (e.target.classList.contains("overlay")) {
      dispatch(setIsModalShowing(false));
    }
  };

  
  // overlay on home
  // to add item to cart
  // navigate to cart page
  const addItemToCart = (product) => {
    let totalPrice = quantity * product.price;
    const newProduct = { ...product, newQty: quantity, totalPrice };
    dispatch(setIsModalShowing(false));
    dispatch(AddToCart(newProduct))
    navigate("/");
  };

  return (
    <div className="overlay p-4 lg:p-4 flex items-center justify-center" onClick={modalOverlay}>
      <div className="relative  bg-gray-700 text-white backdrop-blur-md w-[700px] lg:w-[800px]">
        <div className="p-4">
          <button
            onClick={() => dispatch(setIsModalShowing(false))}
            className="absolute right-4 top-1"
          >
            <AiOutlineClose size={30} className="font-bold" />
          </button>
          <div className="flex flex-col gap-x-6 gap-y-6 sm:flex-row md:flex-row lg:flex-row">
            <div>
              <div className="p-4 h-full">
                <img src={product.images[0]} alt="" className="rounded-md h-full " />
              </div>
            </div>

            <div className="p-4">
              <div className="">
                <h3 className="mb-4 text-2xl font-semibold text-white lg:text-3xl">
                  {product.title}
                </h3>
                <p className="max-w-[500px] text-sm">{product.description}</p>
                <div className="my-4 ">
                  <p className="text-3xl font-semibold uppercase text-green-500">
                    ${product.price}
                  </p>
                </div>

                <div className="flex flex-col gap-x-8 border border-white  p-2 py-5 lg:flex-row lg:border-gray-800 ">
                  <span className="container mx-auto flex items-center gap-x-3 ">
                    <h1 className="font-semibold">Quantity</h1>
                    <AiFillShopping size={25} />:
                  </span>
                  <div className="my-5 flex  items-center justify-center gap-x-4">
                    <button onClick={() => increaseQuantityOfProduct()}>
                      <AiOutlinePlus size={30} />
                    </button>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white">
                      {quantity}
                    </span>
                    <button onClick={() => decreaseQuantityOfProduct()}>
                      <AiOutlineMinus size={30} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="my-6">
                <button
                  onClick={() => addItemToCart(product)}
                  className="btn-primary"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
