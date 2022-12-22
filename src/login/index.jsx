import React, { useContext, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { User } from '../context';
import { Copyright } from '../Copyright';

const Login = (props) => {
  const [formItem, setFormItem] = useState({
    email:'',
    pass:''
  })
  const userDetails = useContext(User);
  const handleSubmit = () => {

   // make api call and close modal
   props.setOpenLogin(false)
   userDetails.userData({
    userName:'abs',
    email:'222'
   })
  };
  const onChange = (name,e) =>{
    setFormItem({
      ...formItem,
      [name]:e.target.value
    })
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoFocus
              value={formItem.email}
              onChange={(e)=>onChange("email",e)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formItem.pass}
              autoComplete="current-password"
              onChange={(e)=>onChange("pass",e)}
            />
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>handleSubmit()}
            >
              Sign In
            </Button>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  )
}

export default Login;
