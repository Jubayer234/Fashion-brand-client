import React from 'react'
import Swal from 'sweetalert2';

const AddProduct = () => {

const handleAddProducts = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value; 
    const brand = form.brand.value;  
    const type = form.type.value; 
    const rating = form.rating.value; 
    const image = form.image.value; 
    const price = form.price.value; 
    const description = form.description.value; 

    const newProduct = {name,brand,type,rating,image,price,description}
    console.log(newProduct);

    // send data
    fetch('https://my-brand-shop-server-i44qqvcda-jubayer234.vercel.app/products',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire('Product has been added')
      }
    })


}

  return (
    <div className=' bg-gradient-to-r from-[#d8ead0] to-[#7bbdd3] min-h-screen lg:pt-10'>

        <h2 className='font-serif text-[#a38585] text-center text-5xl mb-8 border-b w-2/6 mx-auto pb-5'>Add New Product</h2>
        <div className="hero-content rounded-lg flex-col mb-24 container bg-gradient-to-r   from-[#7bbdd3] to-[#d8ead0] lg:w-3/6 mx-auto">
        <div className="text-center space-y-4">
        </div>
        <div className="card flex-shrink-0 w-full">
          <form onSubmit={handleAddProducts} className="card-body grid grid-cols-1 md:grid-cols-2">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Product name" name="name" className="input input-bordered" required />
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
              <input type="text" name='rating' placeholder="Rating" className="input input-bordered" />
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

export default AddProduct;