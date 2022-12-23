import React from "react";
import Button from "../Common/Button";

import "./heroSection.css";

const HeroSection = () => {
  return (
    <>
    
    <div className="hero-section-wrapper" >
      <div className="flex absolute-center hero-claim-label">
       
        
      </div>
      <div className="flex flex-col absolute-center hero-section max-width">
        <div className="hero-heading">
        Keeping Your Loans At Ease!

        </div>
        <div className="hero-subheading">
          
        </div>
        <Button buttonText="Download Easy Loans" />
      </div>
    </div>
    </>
    
  );
};

export default HeroSection;
