import React from 'react';
import Background from "../login/Background";
import BackgroundCreateAccount from "./BackgroundCreateAccount";

const Register = () => {
  return (
    <div className='register'>
      <div className='background2'>
        <BackgroundCreateAccount/>
      </div>
      <div className='signup'>
        Create Account
      </div>
    </div>
  );
};

export default Register;
