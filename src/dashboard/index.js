import React, { useContext, useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import Login from "../login";
import { User } from "../context";
import { SignUp } from "../signUp";
import { deepOrange } from '@mui/material/colors';
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


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Dashboard= () =>{
    const [openSidebar, setSideBar] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignUp, setOpenSignUp] = useState(false);
    const [openDashboard, setDashboard] = useState(false);
   
    const handleClick = (type) =>{
        if(type === 'Log Out'){
            sessionStorage.removeItem("user")
        }else{

        }
        setSideBar(false)
    }

    const findItems = () =>{
        let arr= ['Apply For Easy EMI','Log Out']
        let userObj = JSON.parse(sessionStorage.getItem('user'));
        if(userObj.isAdmin){
            arr.push('Adim Dashboard');
        }
        if(userObj.isVerified){
            arr.push('Dashboard');
        }
        return arr??[];
    }

    const list = () =>{
        return(
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={()=>console.log(false)}
                >
                <List>
                    {findItems().map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text}  onClick={()=>handleClick(text)}/>    
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        )
    }
    const handleOnLoginClick = (user) =>{
        if(!user){
            setOpenLogin(true);
        }
    }
    return(
    <>
        <Header/>
        <HeroSection/>
        <ProductShowcase/>
        <FeelSpecial/>
        <BrandsLove/>
        <CredExperience/>
        <MobileScroll/>

        <div className="non-mobile">
        <WindowPeak />
        </div>
       
        <CredSecurity/>
        <CredStory/>
        <AppRating/>
        <Footer/>
        </>
       
    )
}

export default Dashboard