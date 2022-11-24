import React from 'react'
import happy from '../../assets/loader/Crazily happy.gif'

const Thankyou = () => {
  return (
    <div className='container mx-auto py-10'>
        <h1 className='text-center capitalize'>thank you for choosing us.. your item will be delivered in two days</h1>

        <div className='flex items-center justify-center py-10'>
            <img src={happy} alt="" />
        </div>
    </div>
  )
}

export default Thankyou