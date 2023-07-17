import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/about';
import Homepage from './components/home';
import Contact from './components/contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <>
      {/*  <h1 className="bg-primary">React Js</h1>
      <p>IWGNIWENAF EAWIFNEWFINEF EEIFNEIFNE FIEFNISNEFIFESNDVES  EINJFIESNFISNEF</p> */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <h1>Hello</h1>
        </Routes>
      </Router>
    </>
  );
}

export default App;
