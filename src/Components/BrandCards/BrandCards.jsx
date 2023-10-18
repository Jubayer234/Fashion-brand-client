import React from 'react'
import Card from '../Card/Card'

const BrandCards = ({cards}) => {
  return (
    <div className='max-w-7xl mx-auto'>
        <h3 className='text-center text-3xl md:text-6xl font-serif mt-8 border-b pb-5 text-[#a38585]'>Fashion Brands</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
            {
                cards?.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    </div>
  )
}

export default BrandCards