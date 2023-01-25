import React from "react";
import img from "../images/dog2.png"


function Home(){
    return(
        <>
<section className="landing-page" style={{backgroundColor:'#fba633',height:'80vh'}}>
<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
<div style={{ width: '50%',textAlign: 'center',marginTop:'3%' }}>
        <h1 style={{fontSize:'80px'}}><strong>Love Your Pet More</strong></h1>
        <p style={{fontSize:'25px'}}>We have a variety of loving pets looking for their forever homes.Not only are pets scientifically proven to reduce stress levels and improve blood pressure,
           but no one can offer the uconditional love and companionship a pet can.  
        </p>
        <button className="btn-landpage" style={{backgroundColor:'#2878e8'}}>View Available Pets</button>
      </div>
      <img src={img} alt="Adorable Pet" style={{ width: '50%',paddingRight:'40px'}} />
    </div>
</section>
        </>
    )
} 
export default Home;