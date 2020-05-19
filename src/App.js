import React from 'react';
import logo from './logo.svg';
import './App.css';
import Typewriting from './typewriting';

function TypeWriting() {
  return (
    <React.Fragment>
        <Typewriting displayString={"bmnbnbnbnbnmbmmnb!!!"} typingDelay={600} />
      </React.Fragment>
  );
}

export default TypeWriting;
