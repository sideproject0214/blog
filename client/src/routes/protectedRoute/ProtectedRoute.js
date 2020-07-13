import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const EditProtectedRoute = ({ component: Component, ...rest }) => {
  const { userId } = useSelector((state) => state.auth);
  const { creatorId } = useSelector((state) => state.post);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (userId === creatorId) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
