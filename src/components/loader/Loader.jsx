import React from 'react';
import loader from '../../assets/loader/Crazily happy.gif'

const Loader = () => {
  return (
    <div className='container mx-auto py-10'>
        <div className = "flex items-center justify-center">
            <img src = {loader} alt = "loader" className='w-10' />
        </div>
    </div>
  )
}

export default Loader