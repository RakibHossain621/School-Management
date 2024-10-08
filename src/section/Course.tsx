import Image from 'next/image';
import React from 'react';
import { Managment } from '@/app/page';

const Course = () => {
  const { course } = Managment;

  return (
    <section className="sec_padding">
      <div className="container">
       
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className="bold-48 !text-TextColor ">
            {course.title} <span className="text-Primary">{course.title1}</span>
          </h1>
          <p className="regular-20 !text-TextColor max-w-[730px] mt-3">{course.subtitle}</p>
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
                <button className="bg-Primary !text-TextColor px-8 py-2 rounded-[10px] medium-16">
                  {courseItem.button}
                </button>
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
