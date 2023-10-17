import axios from 'axios';
import Background from "./Background";
import {
  Box, Button,
  Container,
  CssBaseline,
  TextField,
  Typography
} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/users/signin', {
        email,
        password,
      });
      navigate('/account')
      console.log('Login Successful:', response.data);
    } catch (error) {
      console.error('Login Failed:', error);
    }
  };

  const textFieldStyle = {
    backgroundColor: '#EEF5F3', // Set your desired background color
    borderRadius: '50px',
    marginBottom: '16px',
    width: '500px',
    height: '48px',
  };
  return (
    <div className='login'>
      <div className='signin'>
        <Container component="main" maxWidth="xs">
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
              Login To Your Account
            </Typography>

            <Box onSubmit={handleSubmit} component="form" noValidate sx={{mt: 1}} className='center'>

              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                style={textFieldStyle} // Apply the background color here
              />

              <TextField
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                id="password"
                style={textFieldStyle}
              />
              <Button
                type="submit"
                variant="contained"
                style={{
                  color: 'white',
                  background: '28B498',
                  fontSize: '14px', // Font size
                  fontWeight: '500',
                  padding: '12px 36px', // Padding
                  height: "54px",
                  width: "223px",
                  borderRadius: '50px', // Rounded corners
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // Box shadow
                  marginTop: '16px'
                }}
              >Sign In</Button>
            </Box>

          </Box>
        </Container>
      </div>
      <div className='background'>
        <Background/>
      </div>
    </div>
  );
};

export default Login;
