import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Footer from './Footer';

const API = "http://localhost:3000/pets"


function App() {

  const [pets, setPets] = useState([])


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setPets)

  }, [])
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="adopt" element={<AdoptPet pets={pets}/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;