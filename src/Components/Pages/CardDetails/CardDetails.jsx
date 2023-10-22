import React from 'react'

const CardDetails = ({card}) => {

    const {id,title,image,sliderImg1,sliderImg2,sliderImg3,bgColor} = card||{}

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
        <div style={{backgroundColor:bgColor}} className="card w-1/2  mx-auto shadow-xl">
                <figure className="w px-2 py-2 ">
                    <img src={image} alt="" className="rounded-xl w-full " />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{title}</h2>
                </div>
            </div>
    </div>
  )
}

export default CardDetails
