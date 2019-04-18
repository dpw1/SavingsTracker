import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return !isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div>
      <Header />
      <Route {...props} />
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
