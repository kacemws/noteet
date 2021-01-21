import { useEffect, useState } from "react";
import edit from "../Assets/edit.svg";
import save from "../Assets/save.svg";
import "../Styles/Components/Card.scss";
import { Note } from "../utils/Note";

import { useSpring, animated } from "react-spring";

interface props {
  note: Note;
  index: number;
}
export const Card: React.FC<props> = ({ note, index, ...rest }) => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState(note.note);
  useEffect(() => {
    if (index == 0) {
      console.log("will animate " + note.color + " : " + index);

      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    } else {
      console.log("changed index");
    }
  }, [note]);
  const firstProp = useSpring({
    // marginLeft: animate ? 16 : -200,
    width: animate ? 350 : 0,
    height: animate ? 310 : 0,
    opacity: animate ? 1 : 0,
    backgroundColor: note.color,
  });
  const cardProps = useSpring({
    backgroundColor: note.color,
  });
  return (
    <animated.div
      key={index}
      className="note"
      style={index ? cardProps : firstProp}
    >
      <textarea
        placeholder="Type your note"
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
        }}
      ></textarea>
      <div className="footer">
        <div className="date">
          <span>May 21, 2020</span>
        </div>
        <div className="edit">
          <button>
            <img src={save} alt="Edit Icon" />
          </button>
        </div>
      </div>
    </animated.div>
  );
};
