import React from 'react'
import Image from 'next/image';
import MidTitle from '@/components/MidTitle';
interface ImageGalleryProps {
  ImageGallery: {
    title: string;
    title1: string;
    subtitle: string;
    imageurl: Array<{
      id: number;
      img: string;
    }>
  }
}
const SchoolGallery = ({ ImageGallery }: ImageGalleryProps) => {

  return (
    <section className='sec_padding'>
      <div className="container">
        <div className="flex justify-center flex-col items-center text-center">
          <MidTitle
            title={ImageGallery.title}
            title1={ImageGallery.title1}
            subTitle={ImageGallery.subtitle}
          />
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
              className={`object-cover w-full h-auto ${image.id === 1 || image.id === 6 ? 'md:col-span-2' : ''}  ${image.id === 5 ? 'md:row-span-2 h-full' : ''}`}
            />

          ))}
        </div>
      </div>
    </section>
  )
}

export default SchoolGallery;
