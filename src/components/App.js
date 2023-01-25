import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';
import Footer from './Footer';
// import PetSpecs from './PetSpecs';

const API = "http://localhost:8001/pets"


function App() {

  const [pets, setPets]= useState([])

  useEffect(()=>{
    fetch (API)
    .then(res => res.json())
    .then(setPets)

  }, [])
  return (
    <>
    <Home/>
    <AdoptPet pets={pets}/>
    {/* <PetSpecs/> */}
    <Footer/>
    </>
  );
}

export default App;