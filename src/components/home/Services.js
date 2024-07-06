import React from 'react'
import CommonHeading from "../common/CommonHeading";
import { services } from '../data/Data';
function Services() {
  return (
    <div className="services ">
      <div className="container border-b">
        <CommonHeading titlename="Our Services" />
        <div className="content">
          {services.map((service) => (
            <div key={service.id} className="card">
              <img src={service.src} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services