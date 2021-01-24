import React, { useState } from "react";
import "../Styles/Views/Signup.scss";
import LandingImage from "../Components/image";
// import logo from "../Assets/neo.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();

  const { register, handleSubmit, errors, getValues, setError } = useForm({
    mode: "onChange",
  }); //settings for react hook form

  const [innerLoading, setInnerLoading] = useState(false); // to know wheter we are fetching data or not

  const onSubmit = (data: any) => {
    if (!innerLoading) {
      setInnerLoading(true);
      //   let aux = Object.assign({}, data);
      //   delete aux["confirm_password"];
      //   aux.phone_number = "+213" + aux.phone_number.substring(1);
    }
  };
  return (
    <div className="sign-up">
      <div className="container">
        <div className="left-part">
          <div className="header">
            {/* <img className="logo" src={logo} alt="neo's logo" /> */}
          </div>
          <div className="content">
            <LandingImage />
          </div>
          <div className="greetings legend">
            <h1
              style={{
                textTransform: "uppercase",
              }}
            >
              Noteet
            </h1>
            <h3>Manage all your notes with style and in one place</h3>
          </div>
        </div>
        <div className="right-part">
          <div className="right-part-inner">
            <header>
              {/* <img className="logo" src={logo} alt="neo's logo" /> */}
            </header>
            {/*Header*/}

            {/*Form*/}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/*Username field*/}
              <div className="input-container">
                <label className="label" htmlFor="username">
                  Username
                </label>
                <input
                  className="input"
                  style={{
                    borderColor: errors.username && "red",
                  }}
                  type="text"
                  name="username"
                  ref={register({
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.username ? (
                  <div className="error">
                    {errors.username.type === "manual"
                      ? errors.username.message
                      : "Invalid username"}
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/*Username field*/}

              {/*first & last name field*/}
              <div className="name-container">
                <div className="input-container">
                  <label className="label" htmlFor="last_name">
                    Last name
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="last_name"
                    ref={register({
                      required: true,
                    })}
                    style={{
                      borderColor: errors.last_name && "red",
                    }}
                  />
                  {errors.last_name && (
                    <div className="error">Invalid last name</div>
                  )}
                </div>
                <div className="input-container">
                  <label className="label" htmlFor="first_name">
                    First name
                  </label>
                  <input
                    className="input"
                    type="text"
                    name="first_name"
                    ref={register({
                      required: true,
                    })}
                    style={{
                      borderColor: errors.first_name && "red",
                    }}
                  />
                  {errors.first_name && (
                    <div className="error">Invalid first name</div>
                  )}
                </div>
              </div>
              {/*first & last name field*/}

              {/*Email field*/}
              <div className="input-container">
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Entered value does not match email format",
                    },
                  })}
                  style={{
                    borderColor: errors.email && "red",
                  }}
                />
                {errors.email && (
                  <div className="error">
                    {["pattern", "manual"].includes(errors.email.type)
                      ? errors.email.message
                      : "Invalid email"}
                  </div>
                )}
              </div>
              {/*Email field*/}

              {/*Phone field*/}
              {/* <div className="input-container">
                <label className="label" htmlFor="phone_number">
                  Numéro de Téléphone
                </label>
                <input
                  className="input"
                  style={{
                    borderColor: errors.number && "red",
                  }}
                  type="text"
                  name="phone_number"
                  ref={register({
                    required: true,
                    minLength: 10,
                    maxLength: 10,
                    validate: (str) => {
                      return RegExp("[0-9]{10}").test(str);
                    },
                  })}
                />
                {errors.phone_number && (
                  <div className="error">
                    {errors.phone_number.type === "manual"
                      ? errors.phone_number.message
                      : "Veuillez introduire une valeur valide"}
                  </div>
                )}
              </div> */}
              {/*Phone field*/}

              {/*Password field*/}
              <div className="input-container">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  ref={register({
                    required: true,
                    minLength: 8,
                  })}
                  style={{
                    borderColor: errors.password && "red",
                  }}
                />
                {errors.password && (
                  <div className="error">Invalid password</div>
                )}
              </div>
              {/*Password field*/}

              {/*Confirm Password field*/}
              <div className="input-container">
                <label className="label" htmlFor="confirm_password">
                  Confirm password !
                </label>
                <input
                  className="input"
                  type="password"
                  name="confirm_password"
                  ref={register({
                    required: true,
                    minLength: 8,
                    validate: (password) => {
                      return getValues("password") == password;
                    },
                  })}
                  style={{
                    borderColor: errors.confirm_password && "red",
                  }}
                />
                {errors.confirm_password && (
                  <div className="error">passwords not matching</div>
                )}
              </div>
              {/*Confirm Password field*/}

              <div className="button">
                <button className="submit-button" type="submit">
                  Signup
                </button>
                {innerLoading && (
                  <div className="overlay">
                    <div className="spinner"></div>
                  </div>
                )}
              </div>
            </form>
            {/*Form*/}

            <div className="sign-in">
              <h3>
                Already a member ?
                <span
                  className="highlited"
                  onClick={(_) => {
                    history.push("/");
                  }}
                >
                  {" "}
                  Sign in !
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}