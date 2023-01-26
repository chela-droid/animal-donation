import React from "react";
import { Link } from "react-router-dom";

function PetSpecs({ pets, removePet }) {
  console.log(pets);
  return (
    <>
      {pets.map((petObj) => {
        return (
          <div className="cards" key={petObj.id}>
            <img
              src={petObj.image.url}
              className="card-img-top"
              alt={petObj.image.url}
            />
            <div className="card-body">
              <h5 className="card-title">Name: {petObj.name}</h5>
              <p className={petObj.bred_for}>Bred_for: {petObj.bred_for}</p>
              <p className={petObj.life_span}>Life_span{petObj.life_span}</p>
              <p className={petObj.temperament}>
                Temperament: {petObj.temperament}
              </p>
              <a href="#" className="btn btn-primary" onClick={()=>removePet(petObj)}>Select</a>
              <Link to="/adopt" className="btn btn-primary" onClick={()=>removePet(petObj)} >
                back to pet
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default PetSpecs;
