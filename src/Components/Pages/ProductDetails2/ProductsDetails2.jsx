import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ProductsRoute2 from './ProductsRoute2';

const ProductsDetails2 = () => {
    const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-gradient-to-r min-h-screen pt-10 md:pt-32 from-gray-300 to-[#7bbdd3]'><ProductsRoute2 key={id} card={card}></ProductsRoute2> </div>
  )
}

export default ProductsDetails2