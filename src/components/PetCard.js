import React from "react";
//import PetSpecs from "./PetSpecs";
import { Link } from "react-router-dom"


const PetCard = ({ pet,  deletePet }) => {
  return (
    
    <div className="ui column">
      <div
        className="ui card"
        key={pet.id}
        
      >
        <div className="image">
          <img alt={pet.name} src={pet.image.url} />
        </div>
        <div >
          {pet.name} 
        </div>
        
        
          <span>
            <div className="ui centre aligned segment basic">
              <button
                className="ui mini black button"
                onClick={(e) =>{ e.stopPropagation();
                deletePet(pet)}}
              >
                Remove
              </button>
            </div>
            <div>
              <Link to="/specs">Read More</Link>
            </div>
          </span>
          
        </div>
      </div>
   
  );
};
export default PetCard;