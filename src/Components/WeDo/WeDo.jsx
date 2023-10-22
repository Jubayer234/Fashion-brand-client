import React from 'react'
import cart from '../../assets/cart.svg'
import car from '../../assets/car.svg'
import shop from '../../assets/shop.svg'
import measure from '../../assets/measure.svg'

const WeDo = () => {
  return (
    <div className='max-w-7xl mx-auto bg-white grid lg:grid-cols-2 p-10 rounded-xl gap-10'>
        <div className='md:flex items-center gap-5 border-b pb-4'>
            <img className='bg-[#FFF3E8] p-7 md:p-8 rounded-full' src={cart} />
            <div>
            <h4 className='text-2xl font-bold'>Shop for latest wears</h4>
            </div>
        </div>
        <div className='md:flex items-center gap-5 pb-4 border-b'>
        <img className='bg-[#E2F3FF] p-7 md:p-8 rounded-full' src={shop} />
            <div>
            <h4 className=' text-2xl font-bold'>Sell yours wears</h4>
            
            </div>
        </div>
        <div className='md:flex items-center gap-5'>
        <img className='bg-[#F1F0FF] p-3 lg:p-6 rounded-full' src={measure} />
            <div>
            <h4 className=' text-2xl font-bold'>Request for measurement for a style</h4>
            </div>
        </div>
        <div className='md:flex items-center gap-5'>
        <img className='bg-[#EDFFE7] p-7 md:p-8 rounded-full' src={car} />
            <div>
            <h4 className=' text-2xl font-bold'>Get your wears delivered to you</h4>
            </div>
        </div>
        
    </div>
  )
}

export default WeDo