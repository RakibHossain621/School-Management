import React from 'react'
import { Managment } from '@/app/page';
import Image from 'next/image';

const SchoolGallery = () => {
  const { ImageGallery } = Managment;

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
          <h1 className='bold-48 !text-TextColor'>
            {ImageGallery.title}
            <span className='text-Primary'>{ImageGallery.title1}</span>
          </h1>
          <p className='regular-20 max-w-[728px] mt-3 !text-textColor1'>
            {ImageGallery.subtitle}
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {ImageGallery.imageurl.map((image) => (
            <Image
              key={image.id}
              src={image.img}
              alt={`Gallery Image ${image.id}`}
              width={395}
              height={250}
              className={`object-cover w-full h-auto ${image.id === 1 || image.id === 6 ? 'md:col-span-2' : ''}  ${image.id ===5 ? 'md:row-span-2 h-full' : ''}`}
            />

          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolGallery;
