import React from 'react'
import Image from 'next/image';
import MidTitle from '@/components/MidTitle';
interface fecilitiesProps {
  fecilities: {
    title: string;
    title1: string;
    subtitle: string;
    items: Array<{
      img: string;
      title: string;
      icon: React.ReactNode;
      subtitle: string;


    }>
  }
}
const SchoolFecilities = ({ fecilities }: fecilitiesProps) => {
  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
          <MidTitle
            title={fecilities.title}
            title1={fecilities.title1}
            subTitle={fecilities.subtitle}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10">
          {fecilities.items.map((facility, index) => (
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
