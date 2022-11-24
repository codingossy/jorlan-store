import React from 'react'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './Header.css'
import { getCartTotal } from '../../store/cartSlice'
import { useEffect } from 'react'


const Navbar = () => {
  const dispatch = useDispatch();
  const { totalItems } = useSelector((state => state.cart));

  useEffect(() => {
    dispatch(getCartTotal())
  })

  return (
    <nav className='capitalize hidden md:flex'>
    <ul className='flex items-center space-x-12 px-8 py-2'>
      
     <form action="" className='flex items-center gap-x-1'>
      <input type="text"  className='text-black px-2 text-xs py-1 rounded-md' placeholder='search'/>
      <button>
        <AiOutlineSearch size={25} />
      </button>
     </form>
      <li className='nav-link'>home</li>
      <li className='nav-link'>about</li>
      <Link to='/cart' className='flex gap-x-1 relative'>
       
        <span>
          <AiOutlineShoppingCart size={25} />
        </span>
        <span className='w-5 h-5 bg-red-500 rounded-full absolute flex items-center justify-center -top-3 -right-4 text-xs'>
          {totalItems}
        </span>
      </Link>
    </ul> 
</nav>
  )
}

export default Navbar