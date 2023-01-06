import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { Link } from "react-router-dom";

export default function Inbox() {
  const dispatch = useDispatch();
  // const Email = "Email";
  const inboxMassages = useSelector((state) => state.inboxMassages);
  const CopyOfInboxMassage = inboxMassages;
  console.log(inboxMassages);

  return (
    <>
      <div className="container">
        {inboxMassages.map((data) => (
          <div key={data.Key} className="container border-bottom">
            <h5>{data.Email}</h5>
            <p>Subject: {data.Subject}</p>
            <p>Massage: {data.Massage}</p>
            <p>Key: {data.Key}</p>
            <button
              onClick={() => {
                dispatch(
                  actionCreators.DeletMail(CopyOfInboxMassage.indexOf(data))
                );
              }}
            >
              Delete
            </button>
            <button>
              <Link to={"/OpenMassage/" + data.Key}>Open Mail</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
