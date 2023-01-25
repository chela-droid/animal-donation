import React  from "react";
import { useState } from "react";
import "../App.css"

function AddPet({onAddPet}){

    const [formData,setFormData]=useState({
        name:"",
        bred_for:"",
        life_span:"",
        temperament:"",
        "image.url":"",
    })
    
    function handleChange(e){
          setFormData({
            ...formData,
            [e.target.name]:e.target.value
          })
    }

    function handleSubmit(){
        fetch("http://localhost:8001/pets",{
            method:"POST",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        })
        .then((resp)=>(resp.json)())
        .then((formData)=>onAddPet(formData))

        
    }

    return(
         <div  onSubmit={handleSubmit} id="form">
        <form>
            <input onChange={handleChange} placeholder="name" type="text" name="name" value={formData.name}></input>
            <input onChange={handleChange} placeholder="bred_for" type="text" name="bred_for" value={formData.bred_for}></input >
            <input onChange={handleChange} placeholder="life span" type="text" name="lifeSpan" value={formData.life_span}></input>
            <input onChange={handleChange} placeholder="temperament" type="text" name="temperament" value={formData.temperament}></input>
            <input onChange={handleChange} placeholder="enter image url" type="text" name="image.url" value={formData.image.url}></input>
            <button id="button">Add Pet</button>   
        </form>
        </div>
    ) 
    
}
export default AddPet;