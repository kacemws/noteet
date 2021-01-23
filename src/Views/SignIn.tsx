import React, { useState } from "react";
import "../Styles/Views/SignIn.scss";
import LandingImage from "../Components/image";
// import logo from "../Assets/neo.png";
// import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
export default function Signin() {
  //   const history = useHistory();

  //   const { register, handleSubmit, errors, setError } = useForm({
  //     mode: "onBlur",
  //   }); //settings for react hook form

  const [innerLoading, setInnerLoading] = useState(false); // to know wheter we are fetching data or not
  //   const onSubmit = (data) => {
  //     if (!innerLoading) {
  //       setInnerLoading(true);
  //     }
  //   };

  return (
    <div className="sign-in">
      <div className="container">
        <div className="left-part">
          <div className="header">
            {/* <img className="logo" src={logo} alt="neo's logo" /> */}
            {/* Noteet */}
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
            {/*Header*/}
            <header>
              {/* <img className="logo" src={logo} alt="neo's logo" /> */}
            </header>
            {/*Header*/}

            {/*Title*/}
            <div className="greetings">
              <h1>Welcome</h1>
              <h3>
                New?{" "}
                <span
                  className="highlited"
                  onClick={(_) => {
                    // if (!innerLoading) history.push("sign-up");
                  }}
                >
                  Signup !
                </span>
              </h3>
            </div>
            {/*Title*/}

            {/*Form*/}
            <form
              onSubmit={() => {
                // handleSubmit(onSubmit)
              }}
            >
              {/*Username field*/}
              <div className="input-container">
                <label className="label" htmlFor="username">
                  Email
                </label>
                <input
                  className="input"
                  //   style={{
                  //     borderColor: errors.username && "red",
                  //   }}
                  type="text"
                  name="username"
                  //   ref={register({
                  //     required: true,
                  //     maxLength: 20,
                  //   })}
                />
                {/* {errors.username && (
                  <div className="error">
                    {errors.username.type === "manual"
                      ? errors.username.message
                      : "Veuillez introduire une valeur valide"}
                  </div>
                )} */}
              </div>
              {/*Username field*/}

              {/*Password field*/}
              <div className="input-container">
                <label className="label" htmlFor="password">
                  <div>Password</div>
                  <div className="forgot-password">Forgot password ?</div>
                </label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  //   ref={register({
                  //     required: true,
                  //     minLength: 8,
                  //   })}
                  //   style={{
                  //     borderColor: errors.password && "red",
                  //   }}
                />
                {/* {errors.password && (
                  <div className="error">
                    Veuillez introduire une valeur valide
                  </div>
                )} */}
              </div>
              {/*Password field*/}

              <div className="button">
                <button className="submit-button" type="submit">
                  Signin
                </button>
                {innerLoading && (
                  <div className="overlay">
                    <div className="spinner"></div>
                  </div>
                )}
              </div>
            </form>
            {/*Form*/}
          </div>
        </div>
      </div>
    </div>
  );
}
