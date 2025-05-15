import React from 'react';
import notFound from '../../assets/404.gif'
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div>
             <Link
                        to="/" 
                        className="flex justify-center text-2xl rancho-font text-[#374151] hover:text-[#331A15] transition-colors duration-200"
                    > ← Back to home
                    </Link>
                <img src={notFound} className='max-w-2xl mx-auto' alt="" />
        </div>
    );
};

export default NotFound;