import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';

const API = "http://localhost:3000/pets"


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
    </>
  );
}

export default App;