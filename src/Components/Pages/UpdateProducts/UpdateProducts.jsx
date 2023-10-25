import React from 'react'

const UpdateProducts = () => {
  return (
    <div className=' bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3] min-h-screen lg:pt-10'>
    <h2 className='font-serif text-[#a38585] text-center text-5xl mb-8 border-b w-2/6 mx-auto pb-5'>Add New Product</h2>
    <div className="hero-content flex-col rounded-lg mb-24 container bg-gradient-to-r   from-[#7bbdd3] to-[#d8ead0] lg:w-3/6 mx-auto">
    <div className="text-center space-y-4">
    </div>
    <div className="card flex-shrink-0 w-full">
      <form className="card-body grid grid-cols-1 md:grid-cols-2">
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Product name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" name='brand' placeholder="Brand name" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" name='type' placeholder="Product type" className="input input-bordered" required />
        </div>
        
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" name='rating' placeholder="Rating" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name='image' placeholder="Product url" className="input input-bordered" required />
        </div>
        <div className="form-control ">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="Price" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6 col-span-full">
          <button className="btn bg-[#62acc7]" type='submit' >Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default UpdateProducts