import React from 'react'
import Banner from '../../Banner/Banner'
import BrandCards from '../../BrandCards/BrandCards'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const cards = useLoaderData();

  return (
    <div>
      <div className='bg-[#F7F7F7] '> 
        <Banner></Banner>
    </div>
    <BrandCards cards={cards}></BrandCards>
    </div>
  
  )
}

export default Home