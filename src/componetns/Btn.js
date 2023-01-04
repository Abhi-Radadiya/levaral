import React from "react";
import { Link } from "react-router-dom";

export default function Btn() {
  return (
    <>
      <div className="container">
        <button className="m-3 p-3 ">
          <Link to="/Compose">Compose</Link>
        </button>
        <button className="m-3 p-3 ">
          <Link to="/Inbox">Inbox</Link>
        </button>
      </div>
    </>
  );
}
