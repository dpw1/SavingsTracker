import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";
import { connect } from "react-redux";

const Header = ({ startLogout }) => (
  <header>
    <ul>
      <li>
        <NavLink activeClassName="is-active" to="/dashboard" exact={true}>
          Dashboard
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
      <li>
        <button onClick={startLogout}>logout</button>
      </li>
    </ul>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  undefined,
  mapDispatchToProps
)(Header);
