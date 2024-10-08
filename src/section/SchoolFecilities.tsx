import React from 'react'
import { Managment } from '@/app/page';
import Image from 'next/image';
const SchoolFecilities = () => {
    const { fecilities } = Managment;
  return (
    <section className='sec_padding'>
      <div className="container">
      <div className="flex justify-center flex-col items-center text-center">
          <h1 className='bold-48 !text-TextColor '>
            {fecilities.title}
            <span className='text-Primary'>{fecilities.title1}</span>
          </h1>
          <p className='regular-20 max-w-[728px] mt-3 !text-TextColor'>
            {fecilities.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
          {fecilities.items.map((facility,index) => (
            <div key={index} className="border  rounded-md shadow-md text-center">
              <Image
                src={facility.img}
                alt={facility.title}
                width={395}
                height={250}
                className=" w-full "
              />
              <div className='transform md:translate-x-[144px] md:translate-y-[-56px] translate-x-[120px] translate-y-[-56px] max-w-[5.5em] '>
              <span>{facility.icon}</span>
              </div>
               <div className='px-5 py-9 mt-[-4em]'>
               <h2 className="bold-24 !text-TextColor">{facility.title}</h2>
               <p className="mt-2 regular-16 !text-TextColor">{facility.subtitle}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolFecilities
