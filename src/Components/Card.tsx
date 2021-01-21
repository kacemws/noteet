import { useEffect, useRef, useState } from "react";
import edit from "../Assets/edit.svg";
import "../Styles/Components/Card.scss";
import { Note } from "../utils/Note";

import { useSpring, animated } from "react-spring";

interface props {
  note: Note;
  index: number;
}
export const Card: React.FC<props> = ({ note, index, ...rest }) => {
  const [animate, setAnimate] = useState(false);
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
    marginLeft: animate ? 16 : -200,
    width: animate ? 350 : 0,
    height: animate ? 310 : 0,
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
    ></animated.div>
  );
};
