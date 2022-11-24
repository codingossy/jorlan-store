import React from 'react'
import { useEffect } from 'react';
// icons
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../store/cartSlice';
// router
import { Link } from "react-router-dom";



const SearchCart = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state => state.cart));

  useEffect(() => {
    dispatch(getCartTotal())
  })

  return (
    <>
        <div className="flex items-center justify-center bg-gray-900 py-2 md:hidden">
          <form
            action=""
            className="flex w-[60%] items-center gap-x-1 text-white"
          >
            <input
              type="text"
              className="w-full rounded-md py-1 px-2 text-xs text-black"
              placeholder="search"
            />
            <button>
              <AiOutlineSearch size={25} />
            </button>
          </form>
          <Link to="/cart" className="relative flex gap-x-1 text-white ml-4">
            
            <span>
              <AiOutlineShoppingCart size={25} />
            </span>
            <span className="absolute -top-3 -right-4 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
              {totalItems}
            </span>
          </Link>
        </div>
    </>
  )
}

export default SearchCart