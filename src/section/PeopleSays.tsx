'use client';
import React, { useState, useEffect } from 'react';
import { Managment } from '@/app/page';

const PeopleSays = () => {
    const { says } = Managment;
    const [translateX, setTranslateX] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const visibleCards = 3; // Number of cards visible at once
    const totalCards = says.testimonials.length;

    // Automatically slide after every 3 seconds
    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalCards);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(slideInterval); // Clear the interval when the component unmounts
    }, [totalCards]);

    // Update translateX based on the current slide
    useEffect(() => {
        setTranslateX(-currentSlide * (100 / visibleCards)); // Adjust translateX to slide one card at a time
    }, [currentSlide]);

    return (
        <section className='sec_padding'>
            <div className="container">
                <div className="flex justify-center flex-col items-center text-center">
                    <h1 className='bold-48 !text-TextColor'>
                        {says.title}
                        <span className='text-Primary'>{says.title1}</span>
                    </h1>
                    <p className='regular-20 max-w-[728px] mt-3 !text-TextColor'>
                        {says.subtitle}
                    </p>
                </div>

                <div className='w-full overflow-hidden mt-11'>
                    <div className='w-full flex gap-3 transition-transform duration-500 ease-in-out' style={{ transform: `translateX(${translateX}%)` }}>
                        {says.testimonials.map((testimonial) => (
                            <div className='w-[32.37%] flex-shrink-0' key={testimonial.id}> {/* 33.33% width for 3 visible cards */}
                                <div className="bg-white rounded-lg shadow-lg p-6 border border-[#DFD4D4] text-left h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">
                                            <p className='w-[50px] h-[50px] rounded-full bg-[#455964] text-[30px] text-white flex items-center justify-center'>
                                                {testimonial.avatar}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div>
                                                <h3 className="text-[14px] font-semibold text-secondaryColor">{testimonial.name}</h3>
                                                <p className="text-gray-500 font-[400] text-[11px]">{testimonial.date}</p>
                                            </div>
                                            <span className="text-[14px] text-primaryColor">{testimonial.happClient}</span>
                                        </div>
                                    </div>
                                    <p className="text-secondaryColor">{testimonial.content}</p>
                                    <button className='text-gray-500 mt-2'>{testimonial.btntext}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PeopleSays;
