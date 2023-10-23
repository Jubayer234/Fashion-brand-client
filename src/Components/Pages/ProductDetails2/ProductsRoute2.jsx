import React from 'react'

const ProductsRoute2 = ({card}) => {
    const { id, productImg2, title, productName2, type2 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImg2} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Brand : {title}</h2>
                    <p>{productName2}</p>
                    <p>Type : {type2}</p>
                    <p>price:$100</p>
                    <div className="card-actions">
                        <button className="btn bg-red-600 text-white">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsRoute2