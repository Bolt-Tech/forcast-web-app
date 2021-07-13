import React from "react";

export default function ErrroMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return (
          <p className="errorText">
            Please, enter a valid <span>{error.ref.name}</span> this field
          </p>
        );
      case "minLength":
        return (
          <p className="errorText">Your last name need minmium 3 charcaters</p>
        );
      case "pattern":
        return <p className="errorText">Please, enter a valid email address</p>;
      case "min":
        return <p className="errorText">Minmium age is 16</p>;
      case "validate":
        return <p className="errorText">Username is already used</p>;
      default:
        return null;
    }
  }
  return null;
}
