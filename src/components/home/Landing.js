import React from 'react'

function Landing() {
  return (
    <>
      <div className="land">
        <div className="container">
          <h1>WELCOME TO THE AGENCY WHERE COMPANIES COME TO SCALE.</h1>
        </div>
        <div className="land-v">
          <video playsInline autoPlay muted loop>
            <source
              src="../assets/intro-video.mp4"
              type="video/mp4"
            ></source>
          </video>
        </div>
      </div>
    </>
  );
}

export default Landing