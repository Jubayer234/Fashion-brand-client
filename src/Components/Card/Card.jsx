import React from 'react'

const Card = ({card}) => {
    const {id,title,image,bgColor,textColor} = card || {};
  return (
    <div>
      <div className="card  shadow-xl image-full">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h2  className=" text-center text-4xl text-white mt-36">{title}</h2>
    <div className="card-actions justify-center">
      <button style={{backgroundColor:bgColor, color:textColor}} className="btn text-white">show Detail</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Card