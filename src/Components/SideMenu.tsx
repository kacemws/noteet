import "../Styles/Components/SideMenu.scss";
import plus from "../Assets/plus.svg";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

interface props {
  setSelected: (index: number | null | undefined) => void;
}

export const Sidemenu: React.FC<props> = ({ setSelected }) => {
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
    cursor: open ? "pointer" : "default",
    delay: open ? 350 : 300,
  });
  const secondSelector = useSpring({
    top: open ? 70 : 20,
    opacity: open ? 1 : 0,
    cursor: open ? "pointer" : "default",
    delay: open ? 700 : 250,
  });

  const thirdSelector = useSpring({
    top: open ? 120 : 70,
    opacity: open ? 1 : 0,
    cursor: open ? "pointer" : "default",
    delay: open ? 1050 : 200,
  });

  const fourthSelector = useSpring({
    top: open ? 170 : 120,
    opacity: open ? 1 : 0,
    cursor: open ? "pointer" : "default",
    delay: open ? 1400 : 150,
  });
  const fifthSelector = useSpring({
    top: open ? 220 : 170,
    opacity: open ? 1 : 0,
    cursor: open ? "pointer" : "default",
    delay: open ? 1750 : 100,
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
                setSelected(null); // if closing then set the thing to null;
              }}
            >
              <animated.img src={plus} style={buttonProps} alt="Plus Icon" />
            </button>
          </div>
          <animated.div className="items" style={blockProps}>
            {["first", "second", "third", "fourth", "fifth"].map(
              (number, index) => {
                let style;
                switch (index) {
                  case 0:
                    style = firstSelector;
                    break;
                  case 1:
                    style = secondSelector;
                    break;
                  case 2:
                    style = thirdSelector;
                    break;
                  case 3:
                    style = fourthSelector;
                    break;

                  default:
                    style = fifthSelector;
                    break;
                }
                return (
                  <animated.div
                    key={number}
                    className={`selector ${number}`}
                    style={style}
                    onClick={
                      !open
                        ? () => {}
                        : () => {
                            setOpen(false);
                            setSelected(index); // set the chosen value
                          }
                    }
                  />
                );
              }
            )}
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
