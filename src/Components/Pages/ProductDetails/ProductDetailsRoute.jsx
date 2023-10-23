import React from 'react'

const ProductDetailsRoute = ({ card }) => {
    const { id, productImg1, title, productName1, type1 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImg1} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Brand : {title}</h2>
                    <p>{productName1}</p>
                    <p>Type : {type1}</p>
                    <p>price:$350</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsRoute;