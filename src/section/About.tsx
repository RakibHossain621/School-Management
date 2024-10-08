import React from 'react';
import { Managment } from '@/app/page';



const About = () => {
    const {aboutUs} = Managment
  return (
    <section className="md:flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-8 lg:p-16 bg-white">
      {/* Left section with SVG */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
        {aboutUs.left}
      </div>

      {/* Right section with text content */}
      <div className="w-full lg:w-1/2 lg:pl-16 lg:text-left text-center">
        <h2  className="bold-48 !text-TextColor   mb-4">
          <span className='whitespace-nowrap'> {aboutUs.right.title}{" "}</span>
          <span className="text-Primary">{aboutUs.right.title1}</span>
        </h2>
        <p className="regular-20 !text-scondaryColor lg:max-w-[517px] mb-6">{aboutUs.right.subtitle}</p>

        {/* Bullet points list */}
        <ul className="space-y-4 mb-6">
          {aboutUs.right.items.map((item, index) => (
            <li key={index} className="flex items-start lg:justify-start justify-center">
              <span className="text-Primary font-bold text-2xl mr-3">{item.icon}</span>
              <p className='Medium-20 !text-scondaryColor'> {item.title}</p>
            </li>
          ))}
        </ul>

        {/* Admission Now Button */}
        <div className="flex lg:justify-start justify-center">
          <button className="bg-green-500 !text-scondaryColor Semibold-20 py-2 px-6 rounded hover:bg-green-600 transition duration-300">
            {aboutUs.right.btn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
