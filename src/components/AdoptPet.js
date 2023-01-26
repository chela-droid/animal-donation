import React from "react";
import PetCard from "./PetCard";

//import PetSpecs from "./PetSpecs";

function AdoptPet({ pets, showPet, deletePet }) {
    
  return (
    <div>
        
    <div className="ui four column grid">
      
      <div className="row">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} handleclick={showPet} deletePet={deletePet} />
        ))}
      </div>

      
    </div>
    

    </div>
  );
}
export default AdoptPet;
