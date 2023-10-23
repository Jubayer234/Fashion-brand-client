import React from 'react'

const ProductRoute3 = ({card}) => {
    const { id, productImg3, title, productName3, type3 } = card || {};
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="card w-[350px] md:w-[550px] mx-auto bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={productImg3} className="w-[500px] lg:h-[500px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center text-xl font-semibold">
                    <h2 className="card-title">Brand : {title}</h2>
                    <p>{productName3}</p>
                    <p>Type : {type3}</p>
                    <p>price:$140</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductRoute3