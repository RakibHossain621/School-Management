import React from 'react';
import { Managment } from '@/app/page';

const Environment = () => {
  const { environment } = Managment;

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className='bold-48 !text-TextColor '>
            {environment.title}
            <span className='text-Primary'>{environment.title1}</span>
          </h1>
          <p className='regular-20 max-w-[728px] mt-3 !text-TextColor'>
            {environment.subtitle}
          </p>
        </div>
        <div className=' grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mt-8'>
          {
            environment.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center relative mt-4 md:mt-0 lg:mt-0">
                <span className=''>{item.icon}</span>
                <h3 className='bold-32 !text-TextColor mt-3'>{item.title}</h3>
                <p className='regular-16 !text-scondaryColor'>{item.subtitle}</p>
                <div className={` border-dashed  border-b-black  border-b absolute sm:w-[40%] sm:left-[5.2em] lg:w-[30%] top-[5.2em] lg:left-[13.1em] md:left-[17em] md:w-[51%] mdd:left-[18em] xl:left-[15.1em] xl:w-[40%]  block  ${index === 3 ? 'hidden' : ''} ${index ===1 ? 'hidden lg:block':''} `}></div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Environment;
