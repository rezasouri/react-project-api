import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [emailerror, serEmailerror] = useState("");
  const [Password, setPassword] = useState("");
  const [Passworderror, setPassworderror] = useState("");
  let status;

  const signup = () => {
    const asyncPostCall = async () => {
      try {
        const response = await fetch("http://localhost:3001/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // your expected POST request payload goes here
            email: email,
            Password: Password,
          }),
        });
        const data = await response.json();
        // enter you logic when the fetch is successful
        console.log(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log(error);
      }
    };

    asyncPostCall();
    // console.log(email, Password);
    // fetch("http://localhost:3001/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     email: email,
    //     Password: Password,
    //   }),
    // })
    //   .then((response) => {
    //     status = response.status;
    //     console.log(status)
    //     return response.json();
    //   })
    // let data = JSON.stringify({
    //   email: email,
    //   password: Password,
    // });

    // axios.post("http://localhost:3001/signup", data, {
    //   headers: { "Content-Type": "application/json" },
    // }).then(response=>{

    // }).then(e=>{
    //   console.log(e.error)
    // })

    // axios({
    //   url: "http://localhost:3001/signup",
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: {
    //     email: email,
    //     Password: Password,
    //   },
    // }).then(response=>{
    //   // console.log(response);
    // }).catch(e=>{
    //   console.error(e.response.data);
    // })
  };
  return (
    <Container
      maxWidth="md"
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <Grid
        style={{
          marginTop: 20,
          padding: 20,
          display: "flex",
          flexDirection: "column",
          width: "100vh",
          border: "1px solid #a1a1a1",
        }}
        item
        lg={6}
      >
        <Typography>فرم ورود به سایت</Typography>
        <TextField
          error={emailerror.length > 0}
          helperText={emailerror}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginTop: 20 }}
          label="Email"
        />

        <TextField
          error={Passworderror.length > 0}
          helperText={Passworderror}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ marginTop: 20 }}
          label="Password"
        />

        <Button onClick={signup} variant="contained" style={{ marginTop: 20 }}>
          ثبت نام
        </Button>
      </Grid>
    </Container>
  );
};
export default Register;
