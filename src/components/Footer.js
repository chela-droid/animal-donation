import React from "react";
import "./Footer.css";

function Footer() {
  return (
    
    <div className="card text-center footer">
      <div className="card-body"></div>
      <div className="card-footer text-muted foot">
        <div className="pet">
          <h2>PET ADOPTION WEB</h2>
          <p>Nairobi,Kenya</p>
          <p><span className="material-symbols-outlined icon" >phone_in_talk_watchface_indicator</span> Tel Number:+25475664785</p>
          <p><span className="material-symbols-outlined icon">location_on</span> Moi Avenue</p>
          <p><span className="material-symbols-outlined icon">mail</span>  petcoden@gmail.com</p>
        </div>
      </div>
    </div>
    
  );
}

export default Footer;
