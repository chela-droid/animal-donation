import React from "react"

function PetSpecs({pet}){
  return (
    <div className="ui segment" >
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={pet.image.url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {pet.name}</h2>
            <p>
              <strong>Bred For: </strong>
              {pet.bred_for}
            </p>
            <strong>
              Life Span: {pet.life_span}
            </strong>
            <br />
            <button
              className="ui button fluid"
              onClick={() =>
                pet.back()
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>
                pet.Adopt(pet.pets)
              }
            >
              Adopt
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetSpecs;