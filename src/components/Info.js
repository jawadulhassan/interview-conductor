import React from "react";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";

function Info(props) {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
    props.history.push("/interview");
  };

  return (
    <div className="info-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${errors.username && "error"}`}
          placeholder="Name of Interviewee"
          name="username"
          ref={register({
            required: "Required"
          })}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          ref={register({
            required: "Required"
          })}
        />
        <input
          type="date"
          name="date"
          ref={register({
            required: "Required"
          })}
        />
        <button type="submit">Let's Begin</button>
      </form>
    </div>
  );
}

export default withRouter(Info);
