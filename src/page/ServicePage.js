import React, { useEffect } from 'react'
import Services from '../components/home/Services';

function Service()
{
  useEffect(() => {
    document.title = "Our Services | Codebase";
  });
  return (
    <>
      <Services/>
    </>
  )
}

export default Service