import React from 'react';
import notFound from '../../assets/404.gif'

const NotFound = () => {
    return (
        <div>
                <img src={notFound} className='max-w-3xl mx-auto' alt="" />
        </div>
    );
};

export default NotFound;