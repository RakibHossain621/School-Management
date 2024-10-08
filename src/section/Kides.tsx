import React from 'react';
import { Managment } from '@/app/page';
import Image from 'next/image';
const Kides = () => {


    return (
        <section className='sec_padding '>
            <div className='bg-[#F3FCFF]'>
                <div className="container pt-0">
                <div className="md:flex   items-center justify-end ">

                    {/* Left Section */}
                    <div className="md:w-[50%] w-full">
                        <p className=" medium-20 !text-scondaryColor">{Managment.kidesleft.subtitle}</p>
                        <h1 className="bold-48 !text-scondaryColor mt-4">{Managment.kidesleft.title}</h1>
                        <p className="regular-16  ! text-scondaryColor max-w-[500px] mt-3">{Managment.kidesleft.subtitle1}</p>
                        <div className="flex gap-3 mt-4">
                            <button className=" bg-green-500 Semibold-20 !text-TextColor px-5 py-2 rounded-lg">{Managment.kidesleft.btntext1}</button>
                            <button className=" border border-Primary Semibold-20 text-Primary px-5 py-2 rounded-lg">{Managment.kidesleft.btntext2}</button>
                        </div>
                    </div>

                    {/* Right Section with Image */}
                    <div className='mt-4 md:w-[50%] w-full flex justify-end'>
                        <Image
                            src={Managment.kidesleft.kidesright.img}
                            alt="Kides"
                            width={500}
                            height={426}
                        />
                    </div>
                </div>
                  </div>
            </div>

          
        </section>
    );
};

export default Kides;
