import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";

export default function Compose() {
  // const Key = useSelector((state) => state.Key);
  const Key = 0;
  
  const { register, handleSubmit } = useForm({
    defaultValues: {
      Email: '',
      Subject: '',
      Massage: '',
      Key: 0,
    }
  })
  
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");

  // React.useEffect(() => {
  //   if (email !== "") {
  //     window.localStorage.setItem(Key, JSON.stringify(LocalInboxMassages));
  //   }
  // }, [email, subject, massage]);

  const setEmpty = () => {
    setEmail("");
    setSubject("");
    setMassage("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data)=>{dispatch(actionCreators.UpdateInbox(data),setEmpty(),dispatch(actionCreators.UpdateKey()));
        })}
      >
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="exampleFormControlInput1"
              {...register("Email")}
              onChange={(e) => {
                setEmail(e.target.value);
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
              {...register("Subject")}
              onChange={(e) => {
                setSubject(e.target.value);
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
              {...register("Massage")}
              onChange={(e) => {
                setMassage(e.target.value);
              }}
              value={massage}
            ></textarea>
          </div>
          <input type="submit" name="click" className="p-3" />
        </div>
      </form>
    </>
  );
}