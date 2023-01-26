import React from "react";

const PetCard = ({ pet }) => {
  return (
    <div className="ui column">
      <div
        className="ui card"
        key={pet.id}
        onClick={() => console.log("clicked")}
      >
        <div className="image">
          <img alt={pet.name} src={pet.image.url} />
        </div>
        <div className="content">
          <div className="header">{pet.name}</div>
          <div className="meta text-wrap">
            <h1>Bred for={pet.bred_for}</h1>
          </div>
        </div>
        <div className="extra content">
          <span>Life-span:{pet.life_span}</span><br>
          </br>
          <span>Temperament:{pet.temperament}</span>
          <span>
            <div className="ui centre aligned segment basic">
              <button
                className="ui mini green button"
                onClick={() => console.log("been clicked")}
              >
                Adopt Me
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};
export default PetCard;