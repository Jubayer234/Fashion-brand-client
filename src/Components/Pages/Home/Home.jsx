import React from 'react'
import Banner from '../../Banner/Banner'
import BrandCards from '../../BrandCards/BrandCards'
import { useLoaderData } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import WeDo from '../../WeDo/WeDo'
import BrandMembers from '../../BrandMembers/BrandMembers'

const Home = () => {

  const cards = useLoaderData();

  return (
    <div>
      <div className='bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3]'>
        <Banner></Banner>
        <BrandCards cards={cards}></BrandCards>
        <WeDo></WeDo>
        <BrandMembers></BrandMembers>
      </div>
      <Footer ></Footer>
    </div>

  )
}

export default Home