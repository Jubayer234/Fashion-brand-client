import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ProductRoute3 from './ProductRoute3.jsx/ProductRoute3';

const ProductDetails3 = () => {
  const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-gradient-to-r from-gray-300 to-[#7bbdd3] min-h-screen flex items-center'><ProductRoute3 key={id} card={card}></ProductRoute3> </div>
  )
}

export default ProductDetails3