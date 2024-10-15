import React from 'react'
import Kides from './section/Kides'
import About from './section/About'
import WelcomePage from './section/WelcomePage'
import Course from './section/Course'
import Environment from './section/Environment'
import OurTeacher from './section/OurTeacher'
import SchoolFecilities from './section/SchoolFecilities'
import SchoolGallery from './section/SchoolGallery'
import PeopleSays from './section/PeopleSays'
import LatesNews from './section/LatesNews'
import ContactUs from './section/ContactUs'

const HomePage = ({Managment}:{Managment:any}) => {
  const {welcomeleft,says,kidesleft,aboutUs,course,latesNews,fecilities,teacher,environment,ImageGallery,contactUs} = Managment
  return (
    <div>
     <Kides kidesleft={kidesleft}/>
     <WelcomePage welcomeleft={welcomeleft}/>
     <About aboutUs={aboutUs}/>
     <Course course={course}/>
     <Environment environment={environment}/>
     <OurTeacher teacher={teacher}/>
     <SchoolFecilities fecilities={fecilities}/>
     <SchoolGallery ImageGallery={ImageGallery}/>
     <PeopleSays says={says}/>
     <LatesNews latesNews={latesNews}/>
     <ContactUs contactUs={contactUs}/>
    </div>
  )
}

export default HomePage
