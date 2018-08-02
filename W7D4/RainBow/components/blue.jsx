import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import Indigo from './indigo';


class Blue extends React.Component {
  render() {
    return (
      <div>
        <h2 className="blue"></h2>
        <NavLink exact to="/blue">Only Blue</NavLink>
        <NavLink to="/blue/indigo">Add Indigo</NavLink>

        <div id="rainbow">
          <Route exact path="/blue/indigo" component={Indigo} />
        </div>
      </div>
    );
  }
};

export default Blue;
