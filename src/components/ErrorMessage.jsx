import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-error my-4">
      <span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
