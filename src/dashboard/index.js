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

    const list = () =>{
        return(
           
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={()=>console.log(false)}
                >
                <List>
                    {['Dashboard', 'Log Out','Apply For Easy EMI'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                        <ListItemText primary={text} />    
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
        }else{
                        //open profile

        }

    }
    return(
    <>
       <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor:"#101010"}} >
                <Toolbar>
                    {
                        sessionStorage.getItem("user")!=null && (
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <>
                            <MenuIcon  onClick={()=>setSideBar(!openSidebar)}/>
                                <Drawer
                                    anchor={'left'}
                                    open={openSidebar}
                                    onClose={()=>setSideBar(false)}
                                >
                                    {list()}
                                </Drawer>
                            </>
                        </IconButton>
                        )
                    }
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Easy Loans
                </Typography>
                {
                    JSON.parse(sessionStorage.getItem("user")) !=null ? (
                      <Avatar sx={{ bgcolor: '#ffea00' }}>{JSON.parse(sessionStorage.getItem("user")).userName.slice(0,1)}</Avatar>
                    ) : (
                        <Button color="inherit"
                        onClick={(e)=>setOpenSignUp(true)}
                        >
                             Sign Up
                        </Button>
                    )
                }
                <Button color="inherit"
                     onClick={(e)=>handleOnLoginClick(JSON.parse(sessionStorage.getItem("user")),e)}
                     >
                    {JSON.parse(sessionStorage.getItem("user"))==null? 'Sign in' :  JSON.parse(sessionStorage.getItem("user")).userName}
                </Button>
                </Toolbar>
            </AppBar>
        </Box>
        <Modal
            open={openLogin}
            onClose={()=>setOpenLogin(!openLogin)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Login setOpenLogin={setOpenLogin}/>
            </Box>
         </Modal>

         <Modal
            open={openSignUp}
            onClose={()=>setOpenSignUp(!openSignUp)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <SignUp setOpenLogin={setOpenLogin}/>
            </Box>
         </Modal>
        
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