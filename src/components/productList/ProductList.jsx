import React from 'react'
// utils
import Loader from '../loader/Loader';
import Error from '../error/Error';
import { STATUS } from '../../utils/status'
import { setIsModalShowing, setModalData } from '../../store/modalSlice'
// redux
import { useSelector, useDispatch } from 'react-redux';
// compoenents
import SingleProduct from '../singleProduct/SingleProduct';


const ProductList = ( {products, status}) => {

  const dispatch = useDispatch();
  const { isModalShowing } = useSelector((state) => state.modal);

      // handle modal
  const handleTheModal = (data) => {
    // console.log(data)
    dispatch(setModalData(data));
    dispatch(setIsModalShowing(true));
  };

  // loading
  
  if(status === STATUS.ERROR) return (<Error />);
  if(status === STATUS.LOADING) return (<Loader />);



  return (
    <div className='container mx-auto py-5'>
      {isModalShowing && <SingleProduct /> }

      <div className="container mx-auto">

        <div className="grid grid-cols-1 place-items-center gap-x-8 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <div
            onClick={() => handleTheModal(product)}
              key={product.id}
              className="flex h-full flex-col items-center border bg-white text-black cursor-pointer"
            >
              <div className="">
                <img src={product.images[0]} alt="" className="w-full" />
              </div>
              <div className="my-2 text-xl font-semibold ">
                {product.category.name}
              </div>
              <div className="my-5 text-center">
                <h6 className="text-sm">{product.title}</h6>
                <p className="text-center text-2xl text-green-500">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default ProductList