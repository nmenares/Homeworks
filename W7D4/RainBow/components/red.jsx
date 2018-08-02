import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Orange from './orange';
import Yellow from './yellow';

class Red extends React.Component {
  render() {
    return(
      <div>
        <h2 className="red"></h2>
        <NavLink exact to='/red' >Only Red</NavLink>
        <NavLink to='/red/orange' >Add Orange</NavLink>
        <NavLink to='/red/yellow' >Add Yellow</NavLink>

        <div id="rainbow">
          <Route exact path="/red/orange" component={Orange} />
          <Route exact path="/red/yellow" component={Yellow} />
        </div>
      </div>
    );
  }
};

export default Red;
