import { useEffect, useState } from "react";
import "../Styles/Components/Toast.scss";
import "../Styles/Components/Card.scss";

import { useSpring, animated } from "react-spring";
import Loader from "./Loader";

interface props {
  style: "success" | "danger";
  animate: boolean;
}
export const Toast: React.FC<props> = ({ style, animate, ...rest }) => {
  const wrapperStyle = useSpring({
    display: animate ? "flex" : "none",
  });

  const toastStyle = useSpring({
    marginBottom: animate ? "2rem" : "-4rem",
    display: animate ? "flex" : "none",
  });

  return (
    <animated.div key="toast" className="toast-wrapper" style={wrapperStyle}>
      <animated.div className={`toast ${style}`} style={toastStyle}>
        <h2>Updating state, please wait</h2>
      </animated.div>
    </animated.div>
  );
};
