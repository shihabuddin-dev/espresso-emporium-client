import React from 'react';
import { Link } from 'react-router';
import Button from '../../components/ui/Button';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const newCoffee = Object.fromEntries(formData.entries())

        // add coffee to db
        fetch('http://localhost:3000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee Added!",
                        text: "You successfully added new Coffee here!",
                        icon: "success"
                    });
                    form.reset()
                }
            })

    }

    return (
        <div className="bg-addCoffee flex items-center justify-center py-8">
            <div className="bg-[#F4F3F0] p-8 rounded-lg max-w-4xl w-full shadow-md">
                <Link to="/" className="text-[#331A15] rancho-font hover:underline mb-4 inline-block text-shadow-secondary">
                    ← Back to home
                </Link>
                <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-[#331A15]  mb-4 text-shadow-secondary ">Add New Coffee</h2>
                <p className="text-center text-gray-600 mb-6 md:px-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here.
                </p>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter coffee name" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="Enter coffee Quantity" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Price (BDT)</span>
                        </label>
                        <input type="number" name='price' placeholder="Enter coffee taste" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Supplier</span>
                        </label>
                        <input type="text" name='supplier' placeholder="Enter coffee supplier" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>



                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Category</span>
                        </label>
                        <input type="text" name='category' placeholder="Enter coffee category" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Details</span>
                        </label>
                        <input type="text" name='details' placeholder="Enter coffee details" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control md:col-span-2 w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Enter photo URL" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>
                    <Button type="submit" className="col-span-1 md:col-span-2 mt-2">
                        Add Coffee
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
