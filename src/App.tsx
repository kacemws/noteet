import { Panel } from "./Components/Panel";
import { Sidemenu } from "./Components/SideMenu";
import "./Styles/App.scss";
import "./Styles/colors.scss";
import plus from "./Assets/plus.svg";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

function App() {
  const [open, setOpen] = useState(false);
  const buttonProps = useSpring({
    transform: open ? "rotate(45deg)" : "rotate(360deg)",
  });
  const blockProps = useSpring({
    marginTop: open ? 0 : -48,
  });
  const selectorProps = useSpring({
    opacity: open ? 1 : 0,
  });
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <Sidemenu>
        <div className="logo">Noteet</div>
        <div className="notes-container">
          <div className="add-button">
            <button
              className="addNote"
              onClick={() => {
                setOpen(!open);
              }}
            >
              <animated.img src={plus} style={buttonProps} alt="Plus Icon" />
            </button>
          </div>
          <animated.div className="items" style={blockProps}>
            <animated.div
              className="selector first"
              style={selectorProps}
            ></animated.div>
            <animated.div
              className="selector second"
              style={selectorProps}
            ></animated.div>
            <animated.div
              className="selector third"
              style={selectorProps}
            ></animated.div>
            <animated.div
              className="selector fourth"
              style={selectorProps}
            ></animated.div>
            <animated.div
              className="selector fifth"
              style={selectorProps}
            ></animated.div>
          </animated.div>
        </div>
      </Sidemenu>
      <Panel></Panel>
    </div>
  );
}

export default App;
