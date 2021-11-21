import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.isCheckingToken ? <Preloader isFull={true} /> : props.loggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
      }
    </Route>
  );
};

export default ProtectedRoute;
