import React, { useEffect } from 'react'
import About from "../components/home/About"
import Services from '../components/home/Services';
function AboutUs()
{
  useEffect(() => {
    document.title = "About Us | Codebase";
  });
  return (
    <>
      <About />
      <Services/>
    </>
  )
}

export default AboutUs