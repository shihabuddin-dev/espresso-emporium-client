import React from 'react';
import { useLoaderData } from 'react-router';
import PopularCoffee from './PopularCoffee';
import { FaCoffee } from 'react-icons/fa';

const PopularCoffees = () => {
    const coffees = useLoaderData()


    return (
        <div className='bg-popular-coffee'>
            <div className="text-center space-y-2">
                <h2 className="text-xl font-semibold text-coffee-800 flex justify-center items-center gap-2">
                    <FaCoffee className="text-coffee-600" />
                    Sip & Savor
                    <FaCoffee className="text-coffee-600" />
                </h2>
                <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-[#374151] text-shadow-secondary ">Add New Coffee</h2>
                <h3 className="text-2xl font-semibold text-coffee-700">Our Popular Products</h3>
            </div>
            <div className='grid md:grid-cols-2 gap-4 max-w-4xl mx-auto my-6 px-4 sm:px-0'>
                {
                    coffees.map(coffee => <PopularCoffee
                        key={coffee._id} coffee={coffee} />)
                }

            </div>
        </div>
    );
};

export default PopularCoffees;