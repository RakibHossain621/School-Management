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

const HomePage = () => {
  return (
    <div>
     <Kides/>
     <WelcomePage/>
     <About/>
     <Course/>
     <Environment/>
     <OurTeacher/>
     <SchoolFecilities/>
     <SchoolGallery/>
     <PeopleSays/>
     <LatesNews/>
     <ContactUs/>
    </div>
  )
}

export default HomePage
