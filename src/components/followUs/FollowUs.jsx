import React from 'react';
import cup1 from '../../assets/cups/cup-1.png';
import cup2 from '../../assets/cups/cup-2.png';
import cup3 from '../../assets/cups/cup-3.png';
import cup4 from '../../assets/cups/cup-4.png';
import cup5 from '../../assets/cups/cup-5.png';
import cup6 from '../../assets/cups/cup-6.png';
import cup7 from '../../assets/cups/cup-7.png';
import cup8 from '../../assets/cups/cup-8.png';


const FollowUs = () => {
    return (
        <div>
            <h2 className="text-center text-coffee-800 items-center">Follow Us Now</h2>
            <h2 className="rancho-font text-3xl md:text-4xl font-bold text-center text-[#331A15] text-shadow-primary ">Follow On Instagram</h2>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-4xl mx-auto my-6 px-4 sm:px-0'>
                <img src={cup1} alt="" />
                <img src={cup2} alt="" />
                <img src={cup3} alt="" />
                <img src={cup4} alt="" />
                <img src={cup5} alt="" />
                <img src={cup6} alt="" />
                <img src={cup7} alt="" />
                <img src={cup8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;