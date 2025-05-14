import React from 'react';
import PopularCoffees from '../../components/popularCoffee/PopularCoffees';
import FollowUs from '../../components/followUs/FollowUs';
import Hero from '../../components/hero/Hero';


const Home = () => {
    return (
        <div className='space-y-8 md:space-y-16'>
            <Hero/>
            <PopularCoffees />
            <FollowUs/>
        </div>
    );
};

export default Home;