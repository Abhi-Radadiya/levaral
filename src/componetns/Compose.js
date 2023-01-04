import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";

export default function Compose() {
  
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");
  const [inboxMassages1, setInboxMassages] = useState({Email:null, Subject:null,Massage:null,Key:1})

  
  const setEmpty = () => {
    setEmail("");
    setSubject("");
    setMassage("");
  };


  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => {
              setEmail(e.target.value); 
              inboxMassages1.Email=e.target.value;
            }}
            value={email}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Subject
          </label>
          <input
            className="form-control"
            id="exampleFormControlInput1"
            onChange={(e) => {
              setSubject(e.target.value);
              inboxMassages1.Subject=e.target.value;
            }}
            value={subject}
            />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Massage
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            onChange={(e) => {
              setMassage(e.target.value);
              inboxMassages1.Massage=e.target.value;
            }}
            value={massage}
            ></textarea>
        </div>
        <button
          className="p-3"
          onClick={() => {
            setEmpty();
            setInboxMassages({Key:inboxMassages1.Key+1});
            dispatch(actionCreators.UpdateInbox(inboxMassages1))
          }}
        >
          Send
        </button>
      </div>
    </>
  );
}