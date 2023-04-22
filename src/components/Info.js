import React from "react";
import { useForm } from "react-hook-form";

function Info(props) {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    window.localStorage.setItem("interviewee-info", JSON.stringify(values));
    props.setSelectedTab("interview");
  };

  return (
    <div className="info-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className={`${errors.name && "error"}`}
          placeholder="Name of Interviewee"
          name="name"
          ref={register({
            required: "Required",
          })}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          ref={register({
            required: "Required",
          })}
        />
        <input
          type="date"
          name="date"
          ref={register({
            required: "Required",
          })}
        />
        <button type="submit">Let's Begin</button>
      </form>
    </div>
  );
}

export default Info;
