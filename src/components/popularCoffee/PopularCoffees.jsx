import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import PopularCoffee from './PopularCoffee';
import { FaCoffee } from 'react-icons/fa';
import Button from '../ui/Button';

const PopularCoffees = () => {
    const initialCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(initialCoffees)

return (
        <div className='bg-popular-coffee'>
            <div className="text-center space-y-2">
                <h2 className="text-coffee-800 items-center"> --Sip & Savor-- </h2>
                <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-[#331A15] text-shadow-primary">Our Popular Products</h2>
                <Button className='rancho-font mt-2 text-lg text-shadow-secondary text-white '>
                    <Link to='/addCoffee'>Add Coffee</Link>
                    <FaCoffee className='text-xl text-black' />
                </Button>
            </div>
            <div className='grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto my-6 px-4 sm:px-0'>
                {
                    coffees.map(coffee => <PopularCoffee
                        key={coffee._id}
                        coffees={coffees}
                        setCoffees={setCoffees}
                        coffee={coffee} />)
                }

            </div>
        </div>
    );
};

export default PopularCoffees;