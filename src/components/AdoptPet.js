import React from "react";
import PetCard from "./PetCard";
function AdoptPet(props){
    const allPets = props.pets.map((petObj)=>{
        return(
            <div className="col-3" onClick={()=>{props.handleClick(petObj)}}>
                <PetCard
                key = {petObj.id}
                pet = {petObj}
                />
            </div>
        )
    })
    return(
        <>
        {allPets}
        </>
    )
}
export default AdoptPet;