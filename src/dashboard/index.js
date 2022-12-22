import React, { useState } from "react"
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
import { deepOrange } from '@mui/material/colors';

const Dashboard= (props) =>{
    const [openSidebar, setSideBar] = useState(false);
    const list = () =>{
        return(
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={console.log(false)}
                >
                <List>
                    {['Dashboard', 'User Detail'].map((text) => (
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
    return(
    <>
       <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" >
                <Toolbar>
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
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Easy Loans
                </Typography>
                <Button color="inherit">About Us</Button>
                <Button color="inherit" sx={{paddingRight:'20px'}}>Contact Us</Button>
                <Avatar sx={{ bgcolor: '#ffea00' }}>{props.userName.slice(0,1)}</Avatar>
                <Button color="inherit">{props.userName}</Button>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Dashboard