"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import MidTitle from '@/components/MidTitle';
import Modal from 'react-modal';
import { FaAngleLeft, FaChevronRight } from "react-icons/fa6";
import { RxCross2 } from 'react-icons/rx';

interface ImageGalleryProps {
  ImageGallery: {
    title: string;
    title1: string;
    subtitle: string;
    imageurl: Array<{
      id: number;
      img: string;
    }>;
  };
}

const SchoolGallery = ({ ImageGallery }: ImageGalleryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setCurrentIndex(null);
    setIsOpen(false);
  };

  const handleNext = () => {
    if (currentIndex !== null && currentIndex < ImageGallery.imageurl.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex !== null && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="sec_padding">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <MidTitle
            title={ImageGallery.title}
            title1={ImageGallery.title1}
            subTitle={ImageGallery.subtitle}
          />
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
          {ImageGallery.imageurl.map((image, index) => (
            <Image
              key={image.id}
              src={image.img}
              alt={`Gallery Image ${image.id}`}
              width={395}
              height={250}
              className={`object-cover w-full h-auto cursor-pointer ${
                image.id === 1 || image.id === 6 ? 'md:col-span-2' : ''
              } ${image.id === 5 ? 'md:row-span-2 h-full' : ''}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>

        {/* Modal for Enlarged Image */}
        <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          contentLabel="Enlarged Image Modal"
          className="bg-white rounded-lg px-11 py-5 max-w-3xl w-full max-h-[90vh] overflow-auto relative shadow-lg"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        >
          <button
            onClick={closeModal}
            className="absolute top-2 right-[1.5em] bg-gray-200 hover:bg-gray-300 w-[30px] h-[30px] rounded-full flex items-center justify-center"
          >
           <RxCross2/>
          </button>

          {currentIndex !== null && (
            <div className="flex items-center justify-center h-full">
              <button
                onClick={handlePrev}
                className={`absolute left-[0.2em] bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500 ${
                  currentIndex === 0 && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={currentIndex === 0}
              >
              <FaAngleLeft />
              </button>

              <Image
                src={ImageGallery.imageurl[currentIndex].img}
                alt={`Gallery Image ${currentIndex}`}
                width={800}
                height={500}
                className="object-contain w-full max-h-[82vh] h-auto"
              />

              <button
                onClick={handleNext}
                className={`absolute right-[0.2em] bg-gray-700 text-white p-3 rounded-full hover:bg-gray-500 ${
                  currentIndex === ImageGallery.imageurl.length - 1 &&
                  'opacity-50 cursor-not-allowed'
                }`}
                disabled={currentIndex === ImageGallery.imageurl.length - 1}
              >
               <FaChevronRight/>
              </button>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default SchoolGallery;
