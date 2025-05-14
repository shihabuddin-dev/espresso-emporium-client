import React from 'react';
import { Link, useLoaderData } from 'react-router';
import Button from '../../components/ui/Button';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, photo, name, category, quantity, price, supplier, details } = coffee;

    const handleUpdateCoffee = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updatedCoffee = Object.fromEntries(formData.entries())
        console.log(updatedCoffee)
        fetch(`http://localhost:3000/coffees/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log('updated coffee', data)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Coffee Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })


    }
    return (

        <div className="bg-addCoffee flex items-center justify-center p-4">
            <div className="bg-[#F4F3F0] p-8 rounded-lg max-w-4xl w-full shadow-md">
                <Link to="/" className="text-[#374151] rancho-font hover:underline mb-4 inline-block text-shadow-secondary">
                    ← Back to home
                </Link>
                <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-[#374151] mb-4 text-shadow-secondary ">Update Coffee</h2>

                <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} placeholder="Enter coffee Quantity" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Price (BDT)</span>
                        </label>
                        <input type="number" name='price' defaultValue={price} placeholder="Enter coffee taste" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Supplier</span>
                        </label>
                        <input type="text" name='supplier' defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>



                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Category</span>
                        </label>
                        <input type="text" name='category' defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Details</span>
                        </label>
                        <input type="text" name='details' defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control md:col-span-2 w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Photo</span>
                        </label>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>
                    <Button type="submit" className="col-span-1 md:col-span-2 mt-2">
                        Update Coffee
                    </Button>
                </form>
            </div>
        </div>

    );
};

export default UpdateCoffee;