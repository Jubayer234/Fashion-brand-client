import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ProductCard from './ProductCard';

const MyCart = () => {

const products = useLoaderData();

  return (
    <div className='bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3] min-h-screen'>
        <h2 className='font-serif text-[#a38585] text-center text-5xl mb-8 border-b w-2/6 mx-auto py-8'>Products</h2>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-5'>
            {
                products.map(product => <ProductCard key={products._id} products={product}></ProductCard>)
            }
        </div>
    </div>
  )
}

export default MyCart