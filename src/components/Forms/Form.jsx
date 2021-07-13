import React from "react";
import { useForm } from "react-hook-form";
import ErrorMessage from "./errorMessage";
import "./FormStyle.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import LoginIcon from "@material-ui/icons/VpnKeyTwoTone";
import RegisterIcon from "@material-ui/icons/BorderColorOutlined";

// Material UI Styles
const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: "0 auto",
    backgroundColor: theme.palette.primary.main,
    height: "55px",
    width: "55px"
  }
}));

export default function Form() {
  const classes = useStyles();

  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearError,
    formState: { isSubmitting }
  } = useForm();
  const onSubmit = (data) => {
    alert(`Success & Submitted! \n ${JSON.stringify(data)}`);
    console.log(data);
  };
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const validateUserName = async (value) => {
    await sleep(1000);
    if (value !== "jack") {
      setError("username", "validate");
    } else {
      clearError("username");
    }
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
      <Avatar className={classes.avatar}>
        <LoginIcon />
      </Avatar>
      <h1>Let's Register our Newsletter!</h1>
      <div className="fieldBox">
        {/* FIRST NAME */}
        <label>First Name:</label>
        <input name="First Name" ref={register({ required: true })} />
        <ErrorMessage error={errors["First Name"]} />

        {/* LAST NAME */}
        <label>Last Name:</label>
        <input
          name="Last Name"
          ref={register({ required: true, minLength: 3 })}
        />
        <ErrorMessage error={errors["Last Name"]} />

        {/* GENDER */}
        <label>Gender</label>
        <select name="Gender" ref={register({ required: true })}>
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {"\n"}
        <ErrorMessage error={errors["Gender"]} />
      </div>

      <div className="fieldBox">
        <label>Username</label>
        <input
          name="Username"
          onBlur={(e) => validateUserName(e.target.value)}
          ref={register({ required: true, validate: validateUserName })}
        />
        <ErrorMessage error={errors["Username"]} />

        {/* E-MAIL */}
        <label>E-mail</label>
        <input
          name="E-mail"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />
        <ErrorMessage error={errors["E-mail"]} />

        {/* AGE */}
        <label>Age</label>
        <input
          name="Age"
          type="number"
          ref={register({ required: true, min: 16 })}
        />
        <ErrorMessage error={errors["Age"]} />
      </div>

      <div className="fieldBox comment">
        {/* COMMENT */}
        <label>Comment</label>
        <textarea name="comment" ref={register} placeholder="Message..." />
      </div>

      <button disabled={isSubmitting} type="submit" value={"Register"}>
        Register <RegisterIcon />
      </button>
    </form>
  );
}
