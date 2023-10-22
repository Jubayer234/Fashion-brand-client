import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from '../CardDetails/CardDetails';

const Details = () => {
    const [card,setCard] = useState({});
    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id) 
        setCard(cardDetail)
    },[id,cards])

  return (
    <div className=' bg-gradient-to-r from-gray-300 to-[#7bbdd3]'><CardDetails card={card}></CardDetails></div>
  )
}

export default Details