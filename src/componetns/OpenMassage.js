import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OpenMassage(props) {
  const inboxMassages = useSelector((state) => state.inboxMassages);
  console.log(inboxMassages);
  return (
    <>
      <div className="container">
        <h5>{props.inboxMassages[0].Email}</h5>
        <p>{props.inboxMassages[0].Subject}</p>
        <p>{props.inboxMassages[0].Massage}</p>
        <p> {props.inboxMassages[0].Key}</p>
        <button>
          <Link to="/Inbox">Close</Link>
        </button>
      </div>
    </>
  );
}
