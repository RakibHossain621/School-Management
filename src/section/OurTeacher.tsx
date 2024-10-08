import React from 'react';
import { Managment } from '@/app/page';

const OurTeacher = () => {
  const { teacher } = Managment;

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className='bold-48 !text-TextColor '>
            {teacher.title}
            <span className='text-Primary'>{teacher.title1}</span>
          </h1>
          <p className='regular-20 !text-TextColor max-w-[728px] mt-3'>
            {teacher.subtitle}
          </p>
        </div>

       
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-8'>
          {teacher.items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
            
              <img 
                src={item.img} 
                alt={item.title} 
                className='  object-cover' 
              />
              <h3 className='bold-24 !text-scondaryColor mt-3'>{item.title}</h3>
              <p className='regular-16 !text-[#667185]'>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeacher;
