import React from "react";
import img from "../images/dog5.png"

function Home(){
    return(
        <>
<section className="landing-page" style={{backgroundColor:'#fba633',height:'93vh'}}>
<div style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
<div className="home-text" style={{ width: '50%',textAlign: 'center',marginTop:'10%' }}>
        <h1 style={{fontSize:'100px'}}><strong>Love Your Pet <span className="heading-text" style={{color:'#2878e8'}}>More</span></strong></h1>
        <p style={{fontSize:'30px'}}>We have a variety of loving pets looking for their forever homes. Not only are pets scientifically proven to reduce stress levels and improve blood pressure,
           but no one can offer the uconditional love and companionship a pet can.  
        </p>
        <button className="btn-landpage" style={{backgroundColor:'#2878e8'}}>View Available Pets</button>
      </div>
      <img src={img} alt="Adorable Pet" style={{ width: '50%',paddingRight:'40px',marginTop:'8%'}} />
    </div>
</section>
        </>
    )
} 
export default Home;