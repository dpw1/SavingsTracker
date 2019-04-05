import React from "react";
import ReactDOM from "react-dom";

const Info = ({ info }) => (
  <div className="info">
    <h1>what is up</h1>
    {info && <p>{info}</p>}
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>this is a warnign</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const withAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>please login for extra features</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="fala amigs" />,
//   document.querySelector("#app")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={true} info="fala amigs" />,
  document.querySelector("#app")
);
