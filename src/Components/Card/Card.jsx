import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
  const { id, title, image } = card || {};
  return (
    <div>
      <Link to={`/details/${id}`}>
        <div className="card  shadow-xl image-full">
          <figure><img src={image} /></figure>
          <div className="card-body">
            <h2 className=" text-center text-4xl text-white mt-36">{title}</h2>
            <div className="card-actions justify-center">
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Card