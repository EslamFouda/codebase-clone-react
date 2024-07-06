import React, { useEffect } from "react";
import CommonHeading from "../components/common/CommonHeading";
import { Jobs } from "../components/data/Data";

function Career() {
  useEffect(() => {
    document.title = "Careers | Codebase";
  });
  return (
    <div className="career">
      <div className="container">
        <div className="jobs">
          <CommonHeading titlename="Careers" />
          {Jobs.map((job, index) => (
            <div className="job">
              <div className="item1">
                <h3>{job.title}</h3>
                <p>{job.description} </p>
              </div>
              <div className="item2">
                <h3>Location</h3>
                <p>Egypt</p>
              </div>
              <div className="item3">
                <h3>Area</h3>
                <p>Mansoura</p>
              </div>
            </div>
          ))}
        </div>
        <div className="jobtitle">
          <h3>All Jobs</h3>
          <h6>All Jobs</h6>
          <h6>Backend</h6>
          <h6>Frontend</h6>
          <h6>HR Specialist</h6>
          <h6>Mobile Development</h6>
          <h6>Quality Control</h6>
        </div>
      </div>
    </div>
  );
}

export default Career;
