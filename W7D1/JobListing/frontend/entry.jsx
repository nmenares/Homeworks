import React from 'react';
import ReactDOM from 'react-dom';
import Widget from './components/widget';
import { Provider } from 'react-redux'
import store from './store';

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Provider store={store}><Widget/></Provider>, document.getElementById('root'));
});
