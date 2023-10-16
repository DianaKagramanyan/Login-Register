import React from 'react';
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const ButtonSignUp = () => {
  return (
    <div>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Button variant="contained"
                style={{
                  fontSize: '14px', // Font size
                  fontWeight: '500',
                  padding: '12px 36px', // Padding
                  height: "54px",
                  width: "223px",
                  borderRadius: '50px', // Rounded corners
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // Box shadow
                }}
        >Sign In</Button>
      </Link>
    </div>
  );
};

export default ButtonSignUp;
