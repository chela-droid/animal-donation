import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';
import AdoptPet from './AdoptPet';
import Navbar from './Navbar';
import AboutUs from './AboutUs';

const API = "http://localhost:8001/pets"


function App() {

  const [pets, setPets] = useState([])
  const [page, setPage] = useState("/")

  function getCurrentPage() {
    switch (page) {
      case "/":
        return <Home/>
      case "/about":
        return <AboutUs/>
      case "/adopt":
        return <AdoptPet pets={pets} />

      default:
        return <h1>404 not found</h1>
    }
  }


  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(setPets)

  }, [])
  return (
    <>
      <div>
        <Navbar onChangePage={setPage} />
        {getCurrentPage()}
      </div>
    </>
  );
}

export default App;