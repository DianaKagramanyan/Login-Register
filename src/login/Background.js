import React from 'react';
import ButtonSignUp from "./ButtonSignUp";

const Background = () => {
  return (
    <div className='background-text'>
      <h1 className='title'>New Here?</h1>
      <div className='text'>
        <div>Sign up and discover a great amount</div>
        <div> of new opportunities!</div>
      </div>
      <ButtonSignUp/>
    </div>
  );
};

export default Background;
