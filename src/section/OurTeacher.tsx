import MidTitle from '@/components/MidTitle';
import React from 'react';
interface teacherPrps{
  teacher:{
    title:string;
    title1:string;
    subtitle:string;
    items:Array<{
      img:string;
      title:string;
      subtitle:string;
    }>
  }
  

}
const OurTeacher = ({teacher}:teacherPrps) => {

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
           <MidTitle
            title={teacher.title}
            title1={teacher.title1}
            subTitle={teacher.subtitle}
           />
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
