import React, { useState } from "react"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import Modal from '@mui/material/Modal';
import "../../CommonCss/commonClasses.css"
import "../../CommonCss/animations.css"

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Login from "../../login";
import { SignUp } from "../../signUp";
import {
    Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export const NavBar = (props) => {
  const [openSidebar, setSideBar] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [open, setOpen] = useState(false);
  const [employmentTypeMapping] = useState([
    { value: "full_time", label: "Full Time" },
    { value: "part_time", label: "Part Time" },
    { value: "self_employed", label: "Self Time" },
    { value: "un_employed", label: "Unemployed" },
    { value: "others", label: "Others" },
  ])
  const [amountFinance, setAmountFinance] = useState("");
  const [annualIncome, setAnnualIncome] = useState("");

    const handleClick = (type) =>{
        if(type === 'Log Out'){
            sessionStorage.removeItem("user")
            props.setRenderScreen('Home');
        }if(type === 'Dashboard'){
            props.setRenderScreen('UserDashboard');
        }if(type === 'Home'){
            props.setRenderScreen('Home');
        }if(type === 'Adim Dashboard'){
            props.setRenderScreen('Adim Dashboard');
        }
        if(type == 'Apply For Easy EMI'){
            setOpen(true)
        }
        setSideBar(false);
    }


    const findItems = () =>{
        let arr= ['Home','Apply For Easy EMI']
        let userObj = JSON.parse(sessionStorage.getItem('user'));
       // if(userObj.isAdmin){
            arr.push('Adim Dashboard');
      //  }
       // if(userObj.isVerified){
            arr.push('Dashboard');
       // }
       arr.push('Log Out')
        return arr??[];
    }

  const list = () => {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
      >
        <List>
          {findItems().map((text) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={text}
                  onClick={() => handleClick(text)}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };
  const handleOnLoginClick = (user) => {
    if (!user) {
      setOpenLogin(true);
    }
  };

  const handleAmountFinanceInput =(e)=>{
    setAmountFinance(e.target.value)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#101010" }}>
          <Toolbar>
            {sessionStorage.getItem("user") != null && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <>
                  <MenuIcon onClick={() => setSideBar(!openSidebar)} />
                  <Drawer
                    anchor={"left"}
                    open={openSidebar}
                    onClose={() => setSideBar(false)}
                  >
                    {list()}
                  </Drawer>
                </>
              </IconButton>
            )}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Easy Loans
            </Typography>
            {JSON.parse(sessionStorage.getItem("user")) != null ? (
              <Avatar sx={{ bgcolor: "#ffea00" }}>
                {JSON.parse(sessionStorage.getItem("user")).userName.slice(
                  0,
                  1
                )}
              </Avatar>
            ) : (
              <Button color="inherit" onClick={(e) => setOpenSignUp(true)}>
                Sign Up
              </Button>
            )}
            <Button
              color="inherit"
              onClick={(e) =>
                handleOnLoginClick(
                  JSON.parse(sessionStorage.getItem("user")),
                  e
                )
              }
            >
              {JSON.parse(sessionStorage.getItem("user")) == null
                ? "Sign in"
                : JSON.parse(sessionStorage.getItem("user")).userName}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(!openLogin)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login setOpenLogin={setOpenLogin} />
        </Box>
      </Modal>

      <Modal
        open={openSignUp}
        onClose={() => setOpenSignUp(!openSignUp)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignUp setOpenLogin={setOpenLogin} />
        </Box>
      </Modal>

      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            "& .MuiDialog-paper": {
              minWidth: "600px",
              minHeight: "220px",
            },
            "& .MuiPaper-root": {
              minWidth: "800px",
              minHeight: "220px",
            },
          }}
        >
          <DialogTitle sx={{ fontWeight:"500"}}>Apply Easy EMI</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description"></DialogContentText>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <TextField
                value={amountFinance}
                onChange={handleAmountFinanceInput}
                size="small"
                label="Amount you want to finance (approx)"
                
              />
              <Box sx={{ marginTop: "10px" }}>
                {employmentTypeMapping?.map((radio, index) => (
                  <FormControlLabel
                    control={
                      <Radio
                        value={radio?.value}
                        // checked={radio}
                      />
                    }
                    label={radio?.label}
                  />
                ))}
              </Box>
              <TextField
              value={annualIncome}
              onChange={(event)=> setAnnualIncome(event.target.value)}
                sx={{ marginTop: "10px" }}
                size="small"
                label="Your gross annual income (approx)"
              />
            <Box className="p-3 d-flex align-items-center" border={1} borderColor={"darkgrey"} marginTop={"18px"} padding={"3px"}>
                <span style={{fontSize:"20px", fontWeight:"420"}}>Aadhar</span>
                  <Button variant="contained" component="label" sx={{marginLeft:"8rem"}} >
                    Browse File
                    <input
                      type="file"
                      
                      hidden
                      
                    />
                  </Button>
                  
                </Box>

                <Box className="p-3 d-flex align-items-center" border={1} borderColor={"darkgrey"} marginTop={"10px"} padding={"3px"}>
                <span style={{fontSize:"20px", fontWeight:"420"}}>PAN No.</span>
                  <Button variant="contained" component="label" sx={{marginLeft:"8rem"}} >
                    Browse File
                    <input
                      type="file"
                      
                      hidden
                      
                    />
                  </Button>
                  
                </Box>

                <Box className="p-3 d-flex align-items-center" border={1} borderColor={"darkgrey"} marginTop={"10px"} padding={"3px"}>
                <span style={{fontSize:"20px", fontWeight:"420"}}>Income Proof</span>
                  <Button variant="contained" component="label" sx={{marginLeft:"87px"}} >
                    Browse File
                    <input
                      type="file"
                      
                      hidden
                    
                    />
                  </Button>
                  
                </Box>

                <FormControlLabel sx={{ marginTop:"20px"}}
                    control={
                          <Checkbox

                          />
                        }
                        label={"I hereby authorize Easy Loans to generate & check my Cibil Report"}
                      />

            
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)} variant="text" >CANCEL</Button>
            <Button onClick={()=> setOpen(false)} variant="text" >SUBMIT</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
