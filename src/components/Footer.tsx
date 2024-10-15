import React from 'react';
import { Footer as footer } from '@/app/page';

const Footer = () => {
  
    return (
        <footer className="sec_padding bg-Primary mt-14">
            <div className="container">
                <div className="footer_wrapper md:flex justify-between">

                    {/* Left Section */}
                    <div className="footer_left w-full lg:w-7/12 md:w-[45.333333%]">
                        <h1 className=" bold-32 !text-TextColor mb-4">{footer.title}</h1>
                        <p className="mb-6 medium-16 !text-TextColor max-w-[542px]">{footer.subtitle}</p>
                        <div className="flex space-x-4 cursor-pointer">
                            {footer.socials.map((social, index) => (
                                <span key={index}>{social}</span>
                            ))}
                        </div>
                    </div>

                    {/* Middle and Right Sections Combined */}
                    <div className="footer_combined md:flex  mt-4 md:mt-0 lg:mt-0">

                        {/* Middle Section */}
                        <div className="footer_Middle w-full md:w-1/2">
                            <h1 className="bold-32 !text-TextColor mb-7 md:mt-0">{footer.middel.title}</h1>
                            <ul className="space-y-2">
                                {footer.middel.items.map((item, index) => (
                                    <li key={index} className="hover:underline cursor-pointer medium-14 !text-TextColor">{item}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Section */}
                        <div className="footer_right w-full md:w-1/2  mt-7 md:mt-0">
                            <div>
                                <h1 className="bold-32 !text-TextColor mb-4">{footer.right.title}</h1>
                                <p className='medium-16 !text-TextColor'>{footer.right.subtitle}</p>
                            </div>
                            <div className="mt-6">
                                <h1 className="bold-20  !text-TextColor">{footer.right.title1}</h1>
                                <p className='medium-16  !text-TextColormt-4'>{footer.right.subtitle1}</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="text-center mt-20">
                    <p className='semibold-14 text-TextColor'>Copyright © {new Date().getFullYear()} Darul Irfan Nurani Academi</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
