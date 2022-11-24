import React from 'react';
import error from '../../assets/loader/Crying bitterly.gif'

const Error = () => {
  return (
    <div className='container mx-auto py-10'>
        <div class = "flex items-center justify-center">
            <img src = {error} alt = "error" className='w-10' />
        </div>
    </div>
  )
}

export default Error