import React from 'react';
import Image from 'next/image';
import { Managment } from '@/app/page';
import RightArrowIcon from '@/icon/RightArrowIcon';

const LatesNews = () => {
    const { latesNews } = Managment;

    return (
        <section className="sec_padding">
            <div className="container">

                <div className="text-center mb-8">
                    <h1 className="bold-48 !text-TextColor">
                        {latesNews.title}
                        <span className="text-Primary">{latesNews.title1}</span>
                    </h1>
                    <p className="regular-20 max-w-[728px] mx-auto !text-TextColor">
                        {latesNews.subtitle}
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
                    {latesNews.items.map((item, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg  border border-gray-200">

                            <div className="relative">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={400}
                                    height={250}
                                    className="rounded-t-lg object-cover w-full"
                                />
                                <span className="absolute top-2 left-2 bg-Primary  medium-16 !text-TextColor px-3 py-1 rounded">
                                    {item.date}
                                </span>
                            </div>


                            <div className="p-8">
                                <h3 className="bold-24 !text-scondaryColor">{item.title}</h3>
                                <p className="regular-16 !text-scondaryColor mt-2">
                                    {item.subtitle}
                                </p>
                                <button className="Semibold-16 text-[#369DD7] mt-4 flex items-center gap-4">
                                    {item.btn} <RightArrowIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatesNews;
