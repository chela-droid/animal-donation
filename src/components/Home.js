import React from "react";
import img from "../images/dog2.png"


function Home(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:'#fba633'}}><strong>Pets</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Adopt</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"></a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
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