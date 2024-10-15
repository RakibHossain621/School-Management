import MidTitle from '@/components/MidTitle';
import React from 'react';
interface environmentProps{
  environment:{
    title:string;
    title1:string;
    subtitle:string;
    items:Array<{
      icon:React.ReactNode;
      title:string;
      subtitle:string;

    }>
  }
}
const Environment = ({environment}:environmentProps) => {

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
           <MidTitle
            title={environment.title}
            title1={environment.title1}
            subTitle={environment.subtitle}
           />
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
