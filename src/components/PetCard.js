import React from "react";
import { Link } from "react-router-dom";


function PetCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.pet.image.url} className="card-img-top" alt={props.pet.image.url} />
                <div className="card-body">
                    <Link to={{
                        pathname: '/petcard',
                        state: 'dsfff'
                    }}>{props.pet.name}</Link>
                    <h5 className="card-title">{props.pet.name}</h5>
                    <p className={props.pet.bred_for}></p>
                    <p className={props.pet.life_span}></p>
                    <p className={props.pet.temperament}></p>
                </div>
            </div>
        </>
    )
}
export default PetCard;