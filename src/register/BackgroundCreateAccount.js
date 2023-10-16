import React from 'react';
import {Link} from "react-router-dom";
import ButtonSignIn from "./ButtonSignIn";

const BackgroundCreateAccount = () => {
  return (
    <div className='background-text'>
      <h1 className='title'>One Of Us?</h1>
      <div className='text'>
        <div>If you already have an account, just</div>
        <div> sign in. We've missed you!</div>
      </div>
        <ButtonSignIn/>
    </div>
  );
};

export default BackgroundCreateAccount;
