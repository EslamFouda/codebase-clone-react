import React from "react";
import "./css/style.css";
import "./App.css";
import { AboutUs, Career, ContactUs, Service, Work, Home } from "./page/index";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Scrollbutton from "./components/common/Scrollbutton";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Service />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Scrollbutton />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
