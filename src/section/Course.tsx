import Button from '@/components/Button';
import MidTitle from '@/components/MidTitle';
import Image from 'next/image';
import React from 'react';
interface courseProps{
  course:{
    title:string;
    title1:string;
    subtitle:string;
    item:Array<{
      img:string;
      button:string;
      itemtitle:string;
      itemsubtitle:string;
    }>
  }
}
const Course = ({course}:courseProps) => {


  return (
    <section className="sec_padding">
      <div className="container">
       
        <div className="flex justify-center flex-col items-center text-center">
          <MidTitle
           title={course.title}
           title1={course.title1}
           subTitle={course.subtitle}
          />
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {course.item.map((courseItem, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg ">
              {/* Course Image */}
              <Image
                src={courseItem.img}
                alt={courseItem.itemtitle}
                width={400}
                height={300}
                className="w-full h-auto rounded-lg"
              />
              
              {/* Course Info */}
              <div className="mt-4 px-8 pb-7">
               <Button
                 title={courseItem.button}
                 mainclass='px-8 py-2 rounded-[10px] medium-16'
                />
                <h3 className="mt-3 bold-24 !text-scondaryColor">{courseItem.itemtitle}</h3>
                <p className="regular-16 !text-scondaryColor mt-2">{courseItem.itemsubtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Course;
