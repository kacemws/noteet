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
          <div className="items">
            <div className="selector first"></div>
            <div className="selector second"></div>
            <div className="selector third"></div>
            <div className="selector fourth"></div>
            <div className="selector fifth"></div>
          </div>
        </div>
      </Sidemenu>
      <Panel></Panel>
    </div>
  );
}

export default App;
