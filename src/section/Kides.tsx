import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
interface kidesleftProps {
    kidesleft: {
        subtitle: string;
        title: string;
        subtitle1: string;
        btntext1: string;
        btntext2: string;
        kidesright: {
            img: string;
        }

    }
}
const Kides = ({ kidesleft }: kidesleftProps) => {


    return (
        <section className='sec_padding '>
            <div className='bg-[#F3FCFF]'>
                <div className="container pt-0">
                    <div className="md:flex   items-center justify-end ">

                        {/* Left Section */}
                        <div className="md:w-[50%] w-full">
                            <p className=" medium-20 !text-scondaryColor">{kidesleft.subtitle}</p>
                            <h1 className="bold-48 !text-scondaryColor mt-4">{kidesleft.title}</h1>
                            <p className="regular-16  ! text-scondaryColor max-w-[500px] mt-3">{kidesleft.subtitle1}</p>
                            <div className="flex gap-3 mt-4">
                              <Button
                                 title={kidesleft.btntext1}
                                />
                                <Button
                                 title={kidesleft.btntext2}
                                 mainclass='bg-transparent border border-Primary '
                                />

                            </div>
                        </div>

                        {/* Right Section with Image */}
                        <div className='mt-4 md:w-[50%] w-full flex justify-end'>
                            <Image
                                src={kidesleft.kidesright.img}
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
