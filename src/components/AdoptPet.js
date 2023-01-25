import React from "react";
import PetCard from "./PetCard";

 function AdoptPet({pets,}){
  
    return(
         <div className="ui four column grid">
            <div className="row">
                {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
                ))}

            </div>

         </div>

    )
 }
 export default AdoptPet;