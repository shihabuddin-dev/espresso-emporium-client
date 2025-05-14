import React from 'react';
import { useLoaderData, Link } from 'react-router';

const DetailsCoffee = () => {
    const coffee = useLoaderData();

    const {
        photo = "https://via.placeholder.com/350x450.png?text=Coffee+Mug+Mockup", 
        name = "Sample Coffee Name",
        chef = "Mr. Chef Name",
        supplier = "Excellent Supplier",
        taste = "Sweet and Hot",
        category = "Specialty Coffee",
        details = "Detailed description of the coffee, e.g., Espresso with hot water."
    } = coffee || {}; 

    return (
       
        <div className='bg-addCoffee py-12 px-4 sm:px-6 lg:px-8 min-h-screen'>
            <div className="max-w-5xl mx-auto"> 

                {/* Back to Home Link */}
                <div className="mb-8">
                    <Link
                        to="/" 
                        className="inline-flex items-center text-2xl rancho-font text-[#374151] hover:text-[#331A15] transition-colors duration-200"
                    > ← Back to home
                    </Link>
                </div>

                {/* Main Content Card */}
                <div className="bg-[#F4F3F0] rounded-lg shadow-xl p-8 sm:p-10 md:p-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-12 lg:gap-16">
                    {/* Coffee Image Section */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                        <img
                            src={photo}
                            alt={name}
                           
                            className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-none md:w-[300px] lg:w-[350px] h-auto object-contain rounded"
                        />
                    </div>

                    {/* Coffee Info Section */}
                    <div className="flex-grow text-left w-full md:w-auto">
                        <h1
                            className="text-3xl md:text-4xl font-['Rancho'] text-[#331A15] mb-6 md:mb-8"
                       
                        >
                            Niceties
                        </h1>
                        <div className="space-y-2.5 text-base md:text-lg">
                            <p><span className="font-semibold text-slate-800">Name:</span> <span className="text-slate-600">{name}</span></p>
                            <p><span className="font-semibold text-slate-800">Chef:</span> <span className="text-slate-600">{chef}</span></p>
                            <p><span className="font-semibold text-slate-800">Supplier:</span> <span className="text-slate-600">{supplier}</span></p>
                            <p><span className="font-semibold text-slate-800">Taste:</span> <span className="text-slate-600">{taste}</span></p>
                            <p><span className="font-semibold text-slate-800">Category:</span> <span className="text-slate-600">{category}</span></p>
                            <p><span className="font-semibold text-slate-800">Details:</span> <span className="text-slate-600">{details}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCoffee;