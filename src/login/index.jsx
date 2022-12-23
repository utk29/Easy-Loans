import React, { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { User } from "../context";
import { Copyright } from "../Copyright";
import toast, { Toaster } from "react-hot-toast";

const Login = (props) => {
  const [formItem, setFormItem] = useState({
    email: "",
    password: "",
  });
  const userDetails = useContext(User);

  const handleSubmit = () => {
    debugger;
    fetch("https:p3-api.dev.credgenics.com/payment/public/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formItem),
    })
      .then((resp) => {
        return resp.json();
      })
      .then(({ message, data, success }) => {
        if (success) {
          props.setOpenLogin(false);
          userDetails.userData({
            userName: data?.user_data.name,
            email: formItem.email,
            id: data?.user_data.user_id,
            is_admin:data?.user_data.is_admin,
            is_verify:data?.user_data.is_verify
          });
        } else {
          toast.error(message);
        }
      })
      .catch((err) => {
        toast.error(err);
      }).finally(()=>{
        props.setOpenLogin(false);
      })
      props.setOpenLogin(false);
  };
  const onChange = (name, e) => {
    setFormItem({
      ...formItem,
      [name]: e.target.value,
    });
  };
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoFocus
              value={formItem.email}
              onChange={(e) => onChange("email", e)}
            />
            <TextField
              margin="normal"
              fullWidth
              required
              label="password"
              type="passwordword"
              id="passwordword"
              value={formItem.password}
              onChange={(e) => onChange("password", e)}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => handleSubmit()}
          >
            Sign In
          </Button>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
