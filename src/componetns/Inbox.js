import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import {  Link } from "react-router-dom";

export default function Inbox() {
  const dispatch = useDispatch();

  const inboxMassages = useSelector((state) => state.inboxMassages);
console.log('KOLKk')
  console.log(inboxMassages)
  const CopyOfInboxMassage = inboxMassages;
  return (
    <>
      <div className="container">
        {inboxMassages.map((data) => (
          <div key={data.Key} className="container border-bottom">
            <h5>{data.Email}</h5>
            <p>Subject: {data.Subject}</p>
            <p>Massage: {data.Massage}</p>
            <button
              onClick={() => {
                dispatch(
                  actionCreators.DeletMail(CopyOfInboxMassage.indexOf(data))
                );
              }}
            >
              Delete
            </button>
            <button >
              <Link to="/OpenMassage">Open Mail</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
