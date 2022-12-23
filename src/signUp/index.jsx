import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Copyright } from '../Copyright';
import { useContext, useState } from 'react';
import { User } from '../context';
import toast, { Toaster } from "react-hot-toast";

export const SignUp = (props) =>{
    const [formItem, setFormItem] = useState({
        name:'',
        email:'',
        pass:'',
        mobileNumber:''
    });
    const userDetails = useContext(User);
     const handleSubmit = (event) => {
      props.setOpenLogin(false);
        const obj = {
            password:formItem.pass,
            phone_number:formItem.mobileNumber,
            email:formItem.email,
            name:formItem.name
        }
            fetch('https://p3-api.dev.credgenics.com/payment/public/user/signup', {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(obj),
              }).then((resp) => {return resp.json()})
                .then(({ message, data, success }) => {
                  if (success) {
                    props.setOpenLogin(false);
                    userDetails.userData({
                        userName:obj.first_name,
                        email:obj.email,
                        id:data?.user_id,
                        phoneNumber:obj.phone_number
                    });
                  }else{
                    toast.error(message)
                  }
                }).catch((err)=>{
                    toast.error(err)
                }).finally(()=>{
                  props.setOpenLogin(false);
                })
                props.setOpenLogin(false);
      };

      const onChange = (name,e) =>{
        setFormItem({
            ...formItem,
            [name]:e.target.value
          })
      }
      
    return(
        <>
        <Container component="main" maxWidth="xs">
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
              Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name" 
                    autoComplete="family-name"
                    value={formItem.name}
                    onChange={(e)=>onChange('name',e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    autoComplete="email"
                    value={formItem.email}
                    onChange={(e)=>onChange('email',e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formItem.pass}
                    onChange={(e)=>onChange('pass',e)}
                  />
                  </Grid>
                   <Grid item xs={12}>
                   <TextField
                    autoComplete="given-mobileNumber"
                    required
                    fullWidth
                    id="mobileNumber"
                    label="Mobile Number"
                    value={formItem.mobileNumber}
                    autoFocus
                    onChange={(e)=>onChange('mobileNumber',e)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Accept Terms and Conditions"
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>handleSubmit()}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
        <Toaster position="top-center" reverseOrder={false} />
        </>
    )
}