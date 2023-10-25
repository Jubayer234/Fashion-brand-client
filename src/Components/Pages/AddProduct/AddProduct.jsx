import React from 'react'

const AddProduct = () => {
  return (
    <div className=' bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3] min-h-screen lg:pt-10'>
        <h2 className='font-serif text-[#a38585] text-center text-5xl mb-8 border-b w-2/6 mx-auto pb-5'>Add New Product</h2>
        <div className="hero-content flex-col mb-24 container bg-gradient-to-r   from-[#7bbdd3] to-[#d8ead0] lg:w-3/6 mx-auto">
        <div className="text-center space-y-4">
        </div>
        <div className="card flex-shrink-0 w-full">
          <form className="card-body grid grid-cols-1 md:grid-cols-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Enter coffee name" name='name' className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input type="text" name='brand' placeholder="Enter brand name" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input type="text" name='type' placeholder="Enter product type" className="input input-bordered" required />
            </div>
            
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input type="text" name='image' placeholder="Enter product url" className="input input-bordered" required />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" name='price' placeholder="price" className="input input-bordered" required />
            </div>
            <div className="form-control col-span-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="Write description" name="description" className="input input-bordered w-full min-h-16" required />
            </div>
            <div className="form-control mt-6 col-span-full">
              <button className="btn bg-[#62acc7]" type='submit' >Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddProduct