import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MidTitle from '@/components/MidTitle';
interface contactUsProps {
  contactUs: {
    title: string;
    title1: string;
    inputitems: Array<{
      label: string;
      inputtext: string
    }>
    contactright: {
      contant: string;
      subtitle: string;
      img: string;
      title: string;
      title1: string;
      subtitile1: string;
      subtitle2: string;
    }
  }

}
const ContactUs = ({ contactUs }: contactUsProps) => {


  return (
    <section className="sec_padding">
      <div className="container">
        {/* Title */}
        <div className="text-center mb-8">
          <MidTitle
            title={contactUs.title}
            title1={contactUs.title1}
          />
        </div>
        <div className="wrapper md:flex gap-8 border border-[#00000033] p-7">
          {/* Left Form Section */}
          <div className="contact_left w-full md:w-1/2 border-r border-[#00000033] pr-7">
            <form className="space-y-6">
              {contactUs.inputitems.map((item, index) => (
                <div key={index} className="flex flex-col">
                  <label className="mb-2 medium-20 !text-[#290D1480] ">{item.label}</label>
                  <input
                    type="text"
                    placeholder={item.inputtext}
                    required
                    className="border border-gray-300 px-5 py-3 rounded-full focus:outline-none focus:border-primary regular-16 text-[#290D1480]"
                  />
                </div>
              ))}

              {/* Message Box */}
              <div className="flex flex-col">
                <label className="mb-2 medium-20 !text-[#290D1480]">Message*</label>
                <textarea
                  placeholder="Enter your message here"
                  required
                  className="border border-gray-300 regular-16 p-3 rounded-lg h-32 focus:outline-none focus:border-primary"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button className="bg-green-500 w-full !text-TextColor px-8 py-3 rounded-full hover:bg-green-600">
                  Send Message
                </button>

              </div>
              {/* Checkbox */}
              <div className="flex md:items-center space-x-2">
                <div>
                  <input type="checkbox" className=" checkmark outline-none border-none " />
                </div>
                <p className="text-sm text-Primary mb-3 md:mb-0 lg:mb-0 lg:-mt-2">
                  By sending this message, you agree to the{' '}
                  <Link href='#' className="text-scondaryColor underline">
                    Terms of use
                  </Link> {'  '}
                  and {'   '}
                  <Link href="#" className="text-scondaryColor underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
          {/* Right Contact Section */}
          <div className="contact_right w-full md:w-1/2 flex justify-between flex-col">
            <div className='flex justify-between flex-col flex-grow'>
              <div>
                <p className=" medium-20 !text-scondaryColor max-w-[457px] mb-4">{contactUs.contactright.contant}</p>
                <p className=" regular-16 !text-scondaryColor  mb-8">{contactUs.contactright.subtitle}</p>
              </div>
              <h3 className='text-[21px] font-[400] !text-scondaryColor max-w-[400px]'>You can also contact us directly, just call or email us today</h3>
            </div>
            <div className="flex items-center gap-4 mt-4">
              {/* Placeholder image, */}
              <Image
                src={contactUs.contactright.img}
                width={50}
                height={50}
                alt="Contact Person"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-bold !text-scondaryColor">{contactUs.contactright.title} <span className='text-[#545454]'>{contactUs.contactright.title1}</span></p>
                <p className="text-sm !text-scondaryColor">{contactUs.contactright.subtitile1}</p>
                <p className="text-sm text-scondaryColor">{contactUs.contactright.subtitle2}</p>
              </div>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};

export default ContactUs;
