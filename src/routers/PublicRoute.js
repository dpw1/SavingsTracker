import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PublicRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ? <Redirect to="/dashboard" /> : <Route {...props} />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);
