import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  RemoveFromCart,
  getCartTotal,
  clearCart,
  getCartQuantity,
} from "../../store/cartSlice";
import SearchCart from "../../components/nav/SearchCart";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

// image
import unhappy from "../../assets/loader/Very unhappy.gif";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    data: cartItems,
    totalItems,
    discount,
    totalAmount,
    deliveryCharge,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  // add useselector to the dependency so it gets called every time

  // if cart is empty
  const emptyCartMessage = (
    <div className="container mx-auto flex flex-col items-center justify-center py-12">
      <h1 className="max-w-[600px] py-5 text-xl font-semibold capitalize">
        oga mi, sapa don choke?, nothing dey your cart abeg
      </h1>
      <div>
        <img src={unhappy} alt="" className="w-16 bg-transparent" />
      </div>
    </div>
  );

  return (
    <>
      <SearchCart />

      <div className="min-h-[60vh] overflow-x-hidden bg-gray-300 py-10">
        <div className="container mx-auto">
          <div className="bg-gray-200 p-4 text-black">
            <h1 className="py-8 text-2xl font-semibold uppercase">
              Cart items
            </h1>
            <div className="py-5">
              <button onClick={() => dispatch(clearCart())} className="btn-red">
                clear cart
              </button>
            </div>

            <>
              {cartItems.length == 0 ? (
                emptyCartMessage
              ) : (
                <div className="flex flex-col gap-x-10 gap-y-10 lg:flex-row">
                  <div className="w-full flex-auto  p-2 lg:w-64">
                    {cartItems.map((cartItem) => (
                      <div className=" mb-10 flex flex-col justify-around gap-x-10 gap-y-10 border border-gray-400 p-3 md:flex-row">
                        <div>
                          <img
                            src={cartItem.images[0]}
                            alt=""
                            className="w-full md:w-72 object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-y-4">
                          <h5 className="text-center font-semibold capitalize lg:max-w-[100px]">
                            {cartItem.title}
                          </h5>

                          <span className="capitalize text-center text-green-500">
                            price: ${cartItem.price}
                          </span>
                        </div>

                        <div className="flex flex-col items-center justify-center gap-x-8 border border-gray-500  p-2 py-5 lg:flex-row lg:border-gray-500 ">
                          <span className="container mx-auto flex items-center gap-x-3 ">
                            <div className="flex flex-col items-center justify-center gap-y-2">
                              <div className="text-xl text-center font-semibold capitalize text-green-500 ">
                                total price: ${cartItem.totalPrice}
                              </div>

                              <span>
                                <button
                                  onClick={() =>
                                    dispatch(RemoveFromCart(cartItem.id))
                                  }
                                  className="rounded-md bg-red-600 px-5 py-1 text-white hover:bg-red-300"
                                >
                                  delete
                                </button>
                              </span>
                            </div>
                          </span>
                          {/*  */}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-full flex-1 border border-red-400 p-4 lg:w-64">
                    <div className="p-2">
                      <h1 className="text-center text-xl font-semibold uppercase">
                        receipt
                      </h1>
                    </div>
                    <div className="flex flex-col gap-y-5 border border-green-500 p-4 capitalize">
                      <span className="flex justify-between">
                        <p>items total: </p>
                        <p>{totalItems}</p>
                      </span>
                      <span className="flex justify-between">
                        <p>discount</p>
                        <p>${discount}</p>
                      </span>
                      <span className="flex justify-between">
                        <p>delivery</p>
                        <p>${deliveryCharge}</p>
                      </span>
                    </div>

                    <div className="border border-blue-400 p-4 py-6">
                      <div className="flex justify-between font-semibold capitalize">
                        <h1>total: </h1>
                        <span>${totalAmount - discount + deliveryCharge}</span>
                      </div>
                      <Link to="/thankyou">
                        <div className="flex items-center justify-center py-4">
                          <button
                            onClick={() => dispatch(clearCart())}
                            className="rounded-md bg-blue-400 px-5 py-2 text-white"
                          >
                            checkout
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
