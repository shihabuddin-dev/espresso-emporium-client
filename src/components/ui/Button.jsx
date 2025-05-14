import React from 'react';

const Button = ({
    children,
    type = 'button',
    onClick = () => { },
    variant = 'primary',
    className = '',
    ...props
}) => {
    let styles = 'px-4 py-1.5 rounded font-medium transition duration-200 focus:outline-none ';

    if (variant === 'primary') {
        styles += 'btn bg-[#D2B48C] hover:bg-[#b5926f]';
    } else if (variant === 'secondary') {
        styles += 'bg-white text-indigo-700 hover:bg-indigo-100';
    } else if (variant === 'outline') {
        styles += 'px-5 py-2 bg-transparent border-2 border-[#331A15] text-[#331A15] text-lg rounded-full hover:bg-[#331A15] hover:text-white focus:outline-none ';
    } else if (variant === 'danger') {
        styles += 'bg-red-600 text-white hover:bg-red-500';
    } else {
        styles += 'bg-gray-200 text-black';
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${styles} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
