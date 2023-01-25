import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';

const API = "http://localhost:8001/pets"


function App() {

  const [pets, setPets]= useState([])
  const [page, setPage] = useState("/")


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