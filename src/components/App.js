import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';
import Navbar from './Navbar';
import AboutUs from './AboutUs';
import Footer from './Footer';
import AddPet from './AddPet';

const API = "http://localhost:8001/pets"


function App() {

  const [pets, setPets] = useState([])


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setPets)

  }, [])

  function handleAddPet(formData){
    setPets([...pets,formData])
  }
  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="adopt" element={<AdoptPet pets={pets}/>} />
      </Routes>
      <AddPet onAddPet={handleAddPet}/>
      <Footer/>
    </>
  );
}

export default App;