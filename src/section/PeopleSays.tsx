'use client';
import MidTitle from '@/components/MidTitle';
import React, { useState, useEffect } from 'react';

interface saysProps {
    says: {
        title: string;
        title1: string;
        subtitle: string;
        testimonials: Array<{
            id: number;
            avatar: string;
            name: string;
            date: string;
            happClient: string;
            content: string;
            btntext: string;
        }>;
    };
}

const PeopleSays = ({ says }: saysProps) => {
    const [translateX, setTranslateX] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1); // Default to 1 for mobile
    const totalCards = says.testimonials.length;

    // Update visibleCards based on screen size
    const updateVisibleCards = () => {
        if (window.innerWidth >= 1024) setVisibleCards(3); // 3 cards for large screens
        else if (window.innerWidth >= 768) setVisibleCards(2); // 2 cards for medium screens
        else setVisibleCards(1); // 1 card for mobile screens
    };

    useEffect(() => {
        updateVisibleCards();
        window.addEventListener('resize', updateVisibleCards);

        return () => window.removeEventListener('resize', updateVisibleCards);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalCards);
        }, 3000);

        return () => clearInterval(slideInterval);
    }, [totalCards]);

    useEffect(() => {
        setTranslateX(-currentSlide * (100 / visibleCards));
    }, [currentSlide, visibleCards]);

    return (
        <section className="sec_padding">
            <div className="container">
                <div className="flex justify-center flex-col items-center text-center">
                    <MidTitle
                        title={says.title}
                        title1={says.title1}
                        subTitle={says.subtitle}
                    />
                </div>

                <div className="w-full overflow-hidden mt-11">
                    <div
                        className="w-full flex gap-3 transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(${translateX}%)` }}
                    >
                        {says.testimonials.map((testimonial) => (
                            <div
                                className="w-full md:w-[48%] lg:w-[32.37%] flex-shrink-0" // Responsive widths
                                key={testimonial.id}
                            >
                                <div className="bg-white rounded-lg shadow-lg p-6 border border-[#DFD4D4] text-left h-full">
                                    <div className="flex items-center mb-4">
                                        <div className="mr-4">
                                            <p className="w-[50px] h-[50px] rounded-full bg-[#455964] text-[30px] text-white flex items-center justify-center">
                                                {testimonial.avatar}
                                            </p>
                                        </div>
                                        <div className="flex justify-between items-center w-full">
                                            <div>
                                                <h3 className="text-[14px] font-semibold text-secondaryColor">
                                                    {testimonial.name}
                                                </h3>
                                                <p className="text-gray-500 font-[400] text-[11px]">
                                                    {testimonial.date}
                                                </p>
                                            </div>
                                            <span className="text-[14px] text-primaryColor">
                                                {testimonial.happClient}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-secondaryColor">
                                        {testimonial.content}
                                    </p>
                                    <button className="text-gray-500 mt-2">
                                        {testimonial.btntext}
                                    </button>
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
