import React from 'react';
import ReactDom from 'react-dom';
import Calculator from './calculator';

document.addEventListener("DOMContentLoaded", () =>{
  const root = document.getElementById("root");
  ReactDom.render(<Calculator />, root);
});
