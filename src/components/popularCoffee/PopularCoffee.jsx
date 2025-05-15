import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const PopularCoffee = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, category, price } = coffee;

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // Call the delete API here
                fetch(`http://localhost:3000/coffees/${id}`, { method: "DELETE" })
                    .then(res => res.json())
                    .then(data => {
                        const remainingCoffees = coffees.filter(coffee => coffee._id !== id)
                        setCoffees(remainingCoffees)

                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                    })
            }
        });
    };



    return (
        <div className="bg-[#F5F4F1] rounded-lg py-6 px-4 shadow-md flex flex-col md:flex-row items-center gap-4">
            {/* Coffee Image */}
            <div className="w-28 h-28 overflow-hidden rounded-lg flex-shrink-0">
                <img src={photo} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Coffee Info */}
            <div className="flex-grow text-center md:text-left space-y-1">
                <p><span className="font-bold">Name:</span> {name}</p>
                <p><span className="font-bold">Category:</span> {category}</p>
                <p><span className="font-bold">Price:</span> {price} Taka</p>
            </div>

            {/* Action Buttons */}
            <div className="flex md:flex-col gap-2 items-center">
                <Link to={`/detailsCoffee/${_id}`} className="btn btn-sm bg-[#3C393B] hover:bg-black text-white">
                    <FaEye />
                </Link>
                <Link to={`/updateCoffee/${_id}`} className="btn btn-sm bg-[#D2B48C] hover:bg-[#b5926f] text-white">
                    <FaEdit />
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm bg-[#EA4744] hover:bg-red-600 text-white">
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default PopularCoffee;
