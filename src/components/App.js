import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import AdoptPet from "./AdoptPet";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import AddPet from "./AddPet";
import PetSpecs from "./PetSpecs";

const API = "https://dogsjson.onrender.com/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState([]);

  useEffect(() => {
    fetch("https://dogsjson.onrender.com/pets")
      .then((r) => r.json())
      .then((data) => setPets(data));
  }, []);

  function handleClick(pet) {
    {
      setSelectedPet([...selectedPet, pet]);
    }
  }
  const removePet = (pet) => {
    setSelectedPet([...selectedPet].filter((cards) => cards !== pet));
    console.log("selected", selectedPet);
  };
  function handleAddPet(formData) {
    setPets([...pets, formData]);
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route
          path="adopt"
          element={
            <div className="container-fluid">
              <div className="row">
                <AdoptPet pets={pets} handleClick={handleClick} />
              </div>
            </div>
          }
        />
        <Route path="/addpet" element={<AddPet onAddPet={handleAddPet} />} />

        <Route
          path="/petcard"
          element={<PetSpecs pets={selectedPet} removePet={removePet} />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
