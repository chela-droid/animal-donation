import React, { useState } from "react";
import PetCard from "./PetCard";
import "../App.css"

function AdoptPet({ pets, }) {
   const [nameChange, setNameChange] = useState("All")

   function handleChange(event) {
      setNameChange(event.target.value)
   }

   const selectedPets = pets.filter((pet) => {
      if (nameChange === "All") return true;

      return pet.name === nameChange
   })

   return (
      <>
         <div id="adopt1">
            <input id="adoptpet" placeholder="search by name" onChange={handleChange}></input>
            <button id="adopt">Refresh</button>
         </div>


         <div className="ui four column grid">
            <div className="row">
               {selectedPets.map((pet) => (
                  <PetCard key={pet.id} pet={pet} />
               ))}


            </div>

         </div>
      </>
   )
}

export default AdoptPet;
