import React from "react";
import { useRouteError } from "react-router-dom";
useRouteError;

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>Error page</h1>
      <h1>
        {err.status}:{err.statusText}
      </h1>
    </div>
  );
};

export default Error;
