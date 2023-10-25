import React from 'react'
import Swal from 'sweetalert2';

const ProductCard = ({ products }) => {

    const { _id, name, brand, type, image, price, description } = products;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Product has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div>
            <div className="card w-3/4 md:w-[400px] mx-auto bg-base-100 shadow-xl text-center text-lg text-gray-500">
                <figure><img className='md:h-[400px] md:w-full' src={image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-medium">product Name : <span className='text-black'>{name}</span></h2>
                    <p> Brand Name: <span className='text-black font-medium'>{brand}</span></p>
                    <p> Product price: <span className='text-black font-medium'>{price}</span></p>
                    <p> Product Type: <span className='text-black font-medium'>{type}</span></p>
                    <p className=''>{description}</p>

                    <div className="card-actions mx-auto">
                        <button onClick={() => handleDelete(_id)} className="btn bg-sky-500 text-white">Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard