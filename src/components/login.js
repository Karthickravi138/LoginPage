import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Facebook,
  Twitter,
  GitHub,
  Google,
} from "@mui/icons-material";

// Import the images
import illustrationImage from '../Untitled_Export-ikXDHmPDX_result (1).png';
// import maskImage from '../auth-v2-login-mask-light.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const paperStyle = {
    padding: 50,
    height: '70vh',
    width: 360,
    marginTop:100,
    display: 'flex',
    alignItems: 'center',  // Center content vertically
  };

  const containerStyle = {
    display: 'flex',
  };

  const imageContainerStyle = {
    marginRight: '20px',
  };

  const imageStyle = {
    width: '800px',
    height: '800',
    marginTop:'20px',
    marginLeft:'20px'
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        {/* Left image */}
        <img
          src={illustrationImage}
          alt="Left Illustration"
          style={imageStyle}
        />
      </div>
      <Grid>
        <Paper elevation={0} style={paperStyle}>
          <div style={{ flex: 1, marginLeft: '20px' }}>
            {/* Login form */}
            <h3>Welcome to Materialize!👋🏻</h3>
            <h5>Please sign in to your account and start the adventure</h5>
            <TextField
              id="outlined-basic-email"
              size="small"
              margin="normal"
              fullWidth
              label="Email"
              variant="outlined"
            />
            <TextField
              id="outlined-basic-password"
              size="small"
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? 'text' : 'password'}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
              <FormControlLabel
                control={<Checkbox checked={rememberMe} onChange={handleRememberMeChange} color="primary" />}
                label="Remember me"
                style={{ color: '' }}
              />
              <a src="/forgot-password" style={{ color: '#7B66FF' }}>Forgot Password?</a>
            </div>
            <Button
              variant="contained"
              style={{ backgroundColor: '#7B66FF', marginTop: '20px' }}
              fullWidth
              onClick={handleLogin}
            >
              Login
            </Button>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p>New to our platform? <a src="/create-account" style={{ color: '#7B66FF' }}>Create an account</a></p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px' }}>
                <div style={{ borderTop: '1px solid #ccc', width: '40%', margin: '0 10px' }}></div>
                <span style={{ color: '#7B66FF' }}>or</span>
                <div style={{ borderTop: '1px solid #ccc', width: '40%', margin: '0 10px' }}></div>
              </div>
            </div>
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <IconButton style={{ color: '#3b5998' }}>
                <Facebook />
              </IconButton>
              <IconButton style={{ color: '#00acee' }}>
                <Twitter />
              </IconButton>
              <IconButton style={{ color: '#171515' }}>
                <GitHub />
              </IconButton>
              <IconButton style={{ color: '#4285F4' }}>
                <Google />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};

export default Login;
