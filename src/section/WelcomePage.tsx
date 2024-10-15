import MidTitle from '@/components/MidTitle';
import Image from 'next/image';
import React from 'react';
interface welcomeleftProps{
  welcomeleft:{
    title:string; 
    title1:string;
    subtitle:string; 
    item:Array<{
      title:string 
      icon:React.ReactNode;
      subtitle:string;
    }>
    welcomeright:string;
  }
}
const WelcomePage = ({welcomeleft}:welcomeleftProps) => {

  return (
    <section className="sec_padding">
      <div className="container ">
        <div className="wrapper flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Left Section */}
          <div className="lg:w-2/3">
            <MidTitle
             title={welcomeleft.title}
             titleCN='!text-scondaryColor  mb-5'
             title1={welcomeleft.title1}
             subTitle={welcomeleft.subtitle}
             subTitleCN='text-scondaryColor max-w-[554px] mb-10'
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {welcomeleft.item.map((service, index) => (
                <div key={index} className=" p-6 flex items-center space-x-4">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h2 className="bold-24 !text-TextColor">{service.title}</h2>
                    <p className="regular-16 !text-TextColor">{service.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="lg:w-1/3">
            <Image
              src={welcomeleft.welcomeright}
              alt="Welcome Image"
              width={500}
              height={500}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
