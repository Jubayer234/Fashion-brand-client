import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom';
import ProductRoute4 from './ProductRoute4/ProductRoute4';

const ProductDetail4 = () => {
    const [card, setCard] = useState({});
    const { id } = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id)
        setCard(cardDetail)
    }, [id, cards])

    return (
        <div className=' bg-gradient-to-r from-gray-300 to-[#7bbdd3] min-h-screen pt-10 md:pt-32 '><ProductRoute4 key={id} card={card}></ProductRoute4> </div>
    )
}

export default ProductDetail4