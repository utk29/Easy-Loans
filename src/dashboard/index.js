import React from "react"
import HeroSection from "./Herosection";
import Footer from "./Footer";
import ProductShowcase from "./ProductShow/ProductShowCase";
import FeelSpecial from "./ FeelSpecial/ FeelSpecialPage";
import BrandsLove from "./BrandsLove/BrandsLovePage";
import CredExperience from "./CredExperience/CredExperiencePage";
import MobileScroll from "./MobileScroll/MobileScrollPage";
import WindowPeak from "./WindowPeak/WindowPeak";
import CredSecurity from "./CredSecurity/CredSecurityPage";
import CredStory from "./CredStory/CredStoryPage";
import AppRating from "./AppRating/AppRatingPage";
import Header from "./Header/HeaderPage";
import "../CommonCss/commonClasses.css"
import "../CommonCss/animations.css"

const Dashboard= () =>{
    return(
    <>
    <div style={{backgroundColor:"#66b2ed"}}>
        <Header/>
        <HeroSection/>
        </div>
        <img src="newScreen.png" />
        
        {/* <ProductShowcase/> */}
        {/* <FeelSpecial/>
        <BrandsLove/>
        <CredExperience/>
        <MobileScroll/>

        <div className="non-mobile">
        <WindowPeak />
        </div>
       
        <CredSecurity/>
        <CredStory/>
        <AppRating/> */}
        <Footer/>
        </>
       
    )
}

export default Dashboard