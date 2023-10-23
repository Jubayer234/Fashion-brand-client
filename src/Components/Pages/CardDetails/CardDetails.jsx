import React from 'react'
import { Link } from 'react-router-dom';

const CardDetails = ({card}) => {

    const {id,title,sliderImg1,sliderImg2,sliderImg3,productImg1,productImg2,productImg3,productImg4,productName1,productName2,productName3,productName4,text,type1,type2,type3,type4} = card||{};


  return (
    <div className='items-center max-w-7xl mx-auto pt-10'>
        <h2 className='text-center font-serif text-white text-4xl border-b w-80 mx-auto pb-3 mb-8'>Advertisement</h2>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={sliderImg1} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={sliderImg2} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={sliderImg3}className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        <div className="card grid md:grid-cols-2 gap-5 text-white  mx-auto shadow-xl">
               <div className=" px-2 bg-black py-2 rounded-3xl">
               <figure >
                    <img src={productImg1} alt="" className="rounded-xl  w-full " />
                </figure>
                <div className="card-body items-center text-center text-2xl font-semibold">
                    <h2>{productName1}</h2>
                    <p>{text}</p>
                    <p>Brand : {title} </p>
                    <p>Price : $350</p>
                    <p>Type : {type1}</p>
                    <div className='flex justify-around gap-5'>
                      <Link to={`/productDetail/${id}`}><button className='btn'>
                        Details
                        </button></Link>
                        <button className='btn'>
                        Update
                        </button>
                    </div>
                </div>
               </div>
               <div className=" px-2 bg-black py-2 rounded-3xl">
               <figure>
                    <img src={productImg2} className="rounded-xl w-full " />
                </figure>
                <div className="card-body text-2xl font-semibold items-center text-center">
                    <h2>{productName2}</h2>
                    <p>{text}</p>
                    <p>Brand : {title} </p>
                    <p>Price : $100</p>
                    <p>Type : {type2}</p>
                    <div className='flex justify-around gap-5'>
                    <Link to={`/productDetail2/${id}`} ><button className='btn'>
                        Details
                        </button></Link>
                        <button className='btn'>
                        Update
                        </button>
                    </div>
                </div>
               </div>
               <div className=" px-2 bg-black py-2 rounded-3xl">
               <figure >
                    <img src={productImg3} alt="" className="rounded-xl w-full " />
                </figure>
                <div className="card-body text-2xl font-semibold items-center text-center">
                    <h2>{productName3}</h2>
                    <p>{text}</p>
                    <p>Brand : {title} </p>
                    <p>Price : $140</p>
                    <p>Type : {type3}</p>
                    <div className='flex justify-around gap-5'>
                    <Link to={`/productDetail3/${id}`}><button className='btn'>
                        Details
                        </button></Link>
                        <button className='btn'>
                        Update
                        </button>
                    </div>
                </div>
               </div>
               <div className=" px-2 bg-black py-2 rounded-3xl">
               <figure>
                    <img src={productImg4} alt="" className="rounded-xl w-full " />
                </figure>
                <div className="card-body text-2xl font-semibold items-center text-center">
                    <h2>{productName4}</h2>
                    <p>{text}</p>
                    <p>Brand : {title} </p>
                    <p>Price : $220</p>
                    <p>Type : {type4}</p>
                    <div className='flex justify-around gap-5'>
                    <Link to={`/productDetail/${id}`}><button className='btn'>
                        Details
                        </button></Link>
                        <button className='btn'>
                        Update
                        </button>
                    </div>
                </div>
                
               </div>
            </div>
    </div>
  )
}

export default CardDetails
