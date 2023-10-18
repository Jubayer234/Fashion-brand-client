import bannerImg from '../../assets/Woman image.png'

const Banner = () => {
  return (
    <div className='max-w-7xl mx-auto md:flex items-center justify-between  pt-8'>
        <div className='space-y-5 text-center md:text-start mb-10 md:mb-0'>
            <h3 className='font-serif text-[#a38585] text-xl'>TRENDING COLLECTION</h3>
            <h1 className=' text-2xl lg:text-5xl font-serif font-semibold'>Let's Explore <br /> <span className='text-[#3734A9] font-semibold'> Unique Brands!</span></h1>
            <p className='text-[#5B5B5B] text-lg'>Fashion And Apparel is a platform that helps to make fashion accessible to all.
            <br />  It brings fashion to your doorstep!</p>
            <button className='btn bg-gradient-to-r from-pink-400 to bg-violet-500 text-white'>Brand collections</button>
        </div>
        <div>
            <img src={bannerImg}/>
        </div>
    </div>
  )
}

export default Banner