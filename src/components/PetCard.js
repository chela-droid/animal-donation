import React, { useState, useEffect } from 'react';

const PetCard = (props) => {
    const [pet, setPet] = useState({});

    useEffect(() => {
        fetch(`https://dogsapi-icvs.onrender.com/dogs/${props.id}`)
            .then(response => response.json())
            .then(data => setPet(data))
    }, [props.id])

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={pet.imageLink} className="card-img-top" alt={pet.name} />
            <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">ID: {pet.id}</p>
                <p className="card-text">Breed: {pet.breed}</p>
                <p className="card-text">Purpose: {pet.purpose}</p>
                <p className="card-text">Group: {pet.breedGroup}</p>
                <p className="card-text">Life Span: {pet.lifespan}</p>
                <p className="card-text">Temperament: {pet.temperament}</p>
                <p className="card-text">Origin: {pet.origin}</p>
            </div>
        </div>
    );
}

export default PetCard;
