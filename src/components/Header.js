import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <ul>
      <li>
        <NavLink activeClassName="is-active" to="/" exact={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/create">
          New Expense
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="is-active" to="/settings">
          Settings
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/help">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
