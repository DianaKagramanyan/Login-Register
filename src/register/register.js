import React, {useState} from 'react';
import axios from "axios";
import BackgroundCreateAccount from "./BackgroundCreateAccount";
import {
  Box,
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const onChangeVerified = () => {
    setIsVerified(!isVerified);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    console.log('Handling form submission'); // Add this line
    console.log(email, password)
    axios.post('http://localhost:3000/users/signup', {email, password})
      .then((res) => {
        console.log(res)
        navigate('/account')
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const textFieldStyle = {
    backgroundColor: '#EEF5F3', // Set your desired background color
    borderRadius: '50px', // Set the border radius
    width: '24.875rem',
    height: '48px',
    marginBottom: '16px',
  };
  return (
    <div className='register'>
      <div className='background2'>
        <BackgroundCreateAccount/>
      </div>
      <div className='signup'>

        <Container component="main" maxWidth="md">
          <CssBaseline/>
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5"
                        sx={{
                          fontSize: '56px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          fontWeight: '600'
                        }}>
              Create Free Account
            </Typography>

            <Box onSubmit={handleSubmit} component="form" noValidate sx={{mt: 3}} className='center'>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="Name"
                    required
                    fullWidth
                    id="Name"
                    label="Name"
                    autoFocus
                    style={textFieldStyle} // Apply the background color and border radius here
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="Surname"
                    label="Surname"
                    name="Surname"
                    autoComplete="family-name"
                    style={textFieldStyle}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    style={textFieldStyle}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value)
                    }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    style={textFieldStyle}
                  />
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  onChange={onChangeVerified}
                  control={<Checkbox sx={{color: '#28B498'}} value="allowExtraEmails" color="primary"/>}
                />
                I have read the <span className='checkbox'>Terms & Conditions</span>
              </Grid>


              <Button type="submit"
                      variant="contained"
                      style={{
                        background: '28B498',
                        fontSize: '14px', // Font size
                        fontWeight: '500',
                        padding: '12px 36px', // Padding
                        height: "54px",
                        width: "223px",
                        borderRadius: '50px', // Rounded corners
                        boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // Box shadow
                        marginTop: '16px',
                        color: 'white',
                        backgroundColor: isVerified ? "#28B498" : "rgba(40,180,152,0.4)", // Change background color based on verification
                        cursor: isVerified ? "pointer" : "default",// Change cursor based on verification
                      }}
              >Sign Up</Button>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Register;
