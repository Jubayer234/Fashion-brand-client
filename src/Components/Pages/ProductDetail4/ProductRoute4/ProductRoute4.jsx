import React from 'react'

const ProductRoute4 = ({card}) => {
    const { id, productImg4, title, productName4, type4 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImg4} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Brand : {title}</h2>
                    <p>{productName4}</p>
                    <p>Type : {type4}</p>
                    <p>price:$140</p>
                    <div className="card-actions">
                        <button className="btn bg-[#71d2f5]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRoute4