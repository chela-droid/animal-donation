import React from "react";

function PetSpecs({ pet }) {
    return(
    <div>
    <img src={pet.image} alt={pet.name} />
    <h2>{pet.name}</h2>
    <p>Bred For: {pet.bred_for}</p>
    <p>Life Span: {pet.life_span}</p>
    <p>Temperament: {pet.temperament}</p>
  </div>
    )
}

export default PetSpecs;




