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
    delay: open ? 350 : 100,
  });
  const secondSelector = useSpring({
    top: open ? 80 : 20,
    opacity: open ? 1 : 0,
    delay: open ? 700 : 200,
  });

  const thirdSelector = useSpring({
    top: open ? 140 : 80,
    opacity: open ? 1 : 0,
    delay: open ? 1050 : 300,
  });

  const fourthSelector = useSpring({
    top: open ? 200 : 140,
    opacity: open ? 1 : 0,
    delay: open ? 1400 : 400,
  });
  const fifthSelector = useSpring({
    top: open ? 260 : 200,
    opacity: open ? 1 : 0,
    delay: open ? 1750 : 500,
  });

  return (
    <>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="gooey-effect"
            />
            <feComposite
              in="SourceGraphic"
              in2="gooey-effect"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};
