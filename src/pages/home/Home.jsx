import React from 'react';
import PopularCoffees from '../../components/popularCoffee/PopularCoffees';
import FollowUs from '../../components/followUs/FollowUs';


const Home = () => {
    return (
        <div className='space-y-8 md:space-y-16'>
            <PopularCoffees />
            <FollowUs/>
        </div>
    );
};

export default Home;