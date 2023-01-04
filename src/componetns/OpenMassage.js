import React from "react";

export default function OpenMassage(props) {
      return (
    <>
      <div className="container">
        <h5>{props.Email}</h5>
        <p>{props.Subject}</p>
        <p>{props.Massage}</p>
        <button>Close</button>
      </div>
    </>
  );
}
