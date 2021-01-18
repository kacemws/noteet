import "../Styles/Components/SideMenu.scss";
import plus from "../Assets/plus.svg";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

export const Sidemenu: React.FC<{}> = () => {
  const [open, setOpen] = useState(false);

  const buttonProps = useSpring({
    transform: open ? "rotate(45deg)" : "rotate(360deg)",
  });

  const blockProps = useSpring({
    marginTop: open ? 0 : -24,
  });

  const firstSelector = useSpring({
    top: open ? 20 : -20,
    opacity: open ? 1 : 0,
    delay: open ? 350 : 50,
  });
  const secondSelector = useSpring({
    top: open ? 60 : 20,
    opacity: open ? 1 : 0,
    delay: open ? 550 : 100,
  });

  const thirdSelector = useSpring({
    top: open ? 100 : 60,
    opacity: open ? 1 : 0,
    delay: open ? 750 : 150,
  });

  const fourthSelector = useSpring({
    top: open ? 140 : 100,
    opacity: open ? 1 : 0,
    delay: open ? 950 : 200,
  });
  const fifthSelector = useSpring({
    top: open ? 180 : 140,
    opacity: open ? 1 : 0,
    delay: open ? 1150 : 250,
  });

  return (
    <div className="side-menu">
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
          <animated.div className="selector first" style={firstSelector} />
          <animated.div className="selector second" style={secondSelector} />
          <animated.div className="selector third" style={thirdSelector} />
          <animated.div className="selector fourth" style={fourthSelector} />
          <animated.div className="selector fifth" style={fifthSelector} />
        </animated.div>
      </div>
    </div>
  );
};
