import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';

const PopularCoffee = ({ coffee }) => {
    const { _id, photo, name, category, price } = coffee;

    const handleEdit = () => {
        console.log("Edit coffee:", _id);
        // navigate(`/update/${_id}`);
    };

    const handleDelete = () => {
        console.log("Delete coffee:", _id);
        // confirm + delete logic here
    };

    const handleViewDetails = () => {
        console.log("View details of:", _id);
        // navigate(`/coffee/${_id}`);
    };

    return (
        <div className="bg-[#F5F4F1] rounded-lg p-4 shadow-md flex flex-col md:flex-row items-center gap-4">
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

            {/* Action Buttons */}
            <div className="flex md:flex-col gap-2 items-center">
                <button onClick={handleViewDetails} className="btn btn-sm bg-[#3C393B] hover:bg-black text-white">
                    <FaEye />
                </button>
                <button onClick={handleEdit} className="btn btn-sm bg-[#D2B48C] hover:bg-[#b5926f] text-white">
                    <FaEdit />
                </button>
                <button onClick={handleDelete} className="btn btn-sm bg-[#EA4744] hover:bg-red-600 text-white">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default PopularCoffee;
