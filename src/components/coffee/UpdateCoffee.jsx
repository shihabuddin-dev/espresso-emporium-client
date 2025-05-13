import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, photo, name, category, price } = coffee;
    return (
        <div className="bg-[#F5F4F1] rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto">
            {/* Coffee Image */}
            <div className="w-28 h-28 overflow-hidden rounded-lg flex-shrink-0">
                <img src={photo} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Coffee Info */}
            <div className="flex-grow text-center md:text-left">
                <p><span className="font-bold">Name:</span> {name}</p>
                <p><span className="font-bold">Category:</span> {category}</p>
                <p><span className="font-bold">Price:</span> {price} Taka</p>
            </div>

        </div>
    );
};

export default UpdateCoffee;