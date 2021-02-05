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
  useEffect(() => {
    console.log(animate);
  });
  return (
    <div key="toast" className={`toast-wrapper  ${animate ? "visible" : ""}`}>
      <div className={`toast ${style} ${animate ? "visible" : ""}`}>
        <h2>Updating state, please wait</h2>
      </div>
    </div>
  );
};
