import React from 'react';
import Button from '../ui/Button';
import hero1 from '../../assets/icons/1.png'
import hero2 from '../../assets/icons/2.png'
import hero3 from '../../assets/icons/3.png'
import hero4 from '../../assets/icons/4.png'

const Hero = () => {
    const features = [
        {
            imageSrc: hero1,
            title: 'Awesome Aroma',
            description: 'You will definitely be a fan of the design & aroma of your coffee.',
        },
        {
            imageSrc: hero2,
            title: 'High Quality',
            description: 'We served the coffee to you maintaining the best quality.',
        },
        {
            imageSrc: hero3,
            title: 'Pure Grades',
            description: 'The coffee is made of the green coffee beans which you will love.',
        },
        {
            imageSrc: hero4,
            title: 'Proper Roasting',
            description: 'Your coffee is brewed by first roasting the green coffee beans.',
        },
    ];

    return (
        <div className="bg-hero -mt-6">
            <div className="relative bg-cover bg-center text-white py-16 md:py-28">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-2/3 lg:w-1/2 text-left md:pl-8">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight rancho-font text-shadow-primary">
                                Would you like a Cup of Delicious Coffee?
                            </h1>
                            <p className=" text-sm sm:text-base mb-8 leading-relaxed text-gray-200">
                                It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of
                                every moment!! Enjoy the beautiful moments and make them memorable.
                            </p>
                            <Button className='border-none text-gray-800 font-semibold'> Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F5F0E1] py-10 sm:py-12">
                <div className="max-w-4xl mx-auto px-4 md:px-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-4">
                                <img
                                    src={feature.imageSrc}
                                    alt={feature.title}
                                    className="w-14 h-14 mb-3 object-contain"
                                />
                                <h3 className="text-2xl md:text-3xl text-[#5C4033] mb-1 rancho-font ">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[#7A5C58]" >
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;