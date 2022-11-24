import React from 'react'
import { STATUS } from '../../utils/status'
import {Link} from "react-router-dom";

import Error from '../error/Error';
import Loader from '../loader/Loader';

const Category = ({ categories, status }) => {

    if(status === STATUS.ERROR) return (<Error />);
    if(status === STATUS.LOADING) return (<Loader />);

    
  return (
    <section >
        <div className="container mx-auto">
            <div>
                <div className='title'>
                    <h3 className='text-2xl uppercase my-4 font-semibold'>Catalogue</h3>
                    <div className='grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10'>
                        {categories.map((category) => (
                            <Link to={`category/${category.id}`} key={category.id}>
                                <div className='flex flex-col gap-y-3'>
                                <div>
                                    <img src={category.image} alt="" />
                                </div>
                                <div>
                                    <h4 className='font-semibold'>{category.name}</h4>
                                </div>

                                </div>
                            
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Category