import React, { useEffect } from "react";
import Landing from "./Landing";
import About from "./About";
import Services from "./Services";
import Work from "./Work";
import Clients from "./Clients";
import Inquiry from "./Inquiry";

function Home() {
  useEffect(() => {
    document.title = "Home | Codebase";
  });
  return (
    <>
      <Landing />
      <About />
      <Services />
      <Work />
      <Clients />
      <Inquiry />
    </>
  );
}

export default Home;
