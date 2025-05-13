import React from 'react';
import { Link } from 'react-router';

const AddCoffee = () => {
    return (
        <div className="bg-addCoffee flex items-center justify-center p-4">
            <div className="bg-[#F4F3F0] p-8 rounded-lg max-w-4xl w-full shadow-md">
                <Link to="/" className="text-sm text-[#374151] hover:underline mb-4 inline-block">
                    ← Back to home
                </Link>
                <h2 className="text-3xl font-bold text-center text-[#374151] mb-4">Add New Coffee</h2>
                <p className="text-center text-gray-600 mb-6 md:px-6">
                    It is a long established fact that a reader will be distracted by the readable content of a page
                    when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using Content here.
                </p>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Name</span>
                        </label>
                        <input type="text" placeholder="Enter coffee name" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Chef</span>
                        </label>
                        <input type="text" placeholder="Enter coffee chef" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Supplier</span>
                        </label>
                        <input type="text" placeholder="Enter coffee supplier" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Taste</span>
                        </label>
                        <input type="text" placeholder="Enter coffee taste" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Category</span>
                        </label>
                        <input type="text" placeholder="Enter coffee category" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Details</span>
                        </label>
                        <input type="text" placeholder="Enter coffee details" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <div className="form-control md:col-span-2 w-full">
                        <label className="label pl-1 mb-1">
                            <span className="label-text text-[#1F2937] font-semibold">Photo</span>
                        </label>
                        <input type="text" placeholder="Enter photo URL" className="input input-bordered w-full focus:outline-none focus:border-[#D2B48C]" />
                    </div>

                    <button type="submit" className="btn bg-[#D2B48C] hover:bg-[#b5926f] w-full col-span-1 md:col-span-2 mt-4">
                        Add Coffee
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
