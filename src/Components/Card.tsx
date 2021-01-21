import { useEffect, useRef, useState } from "react";
import edit from "../Assets/edit.svg";
import "../Styles/Components/Card.scss";
import { Note } from "../utils/Note";

import { useSpring, animated } from "react-spring";

interface props {
  note: Note;
}
export const Card: React.FC<props> = ({ note, ...rest }) => {
  const [rendred, setRendered] = useState(false);

  useEffect(() => {
    setRendered(true);
  }, []);

  const cardProps = useSpring({
    marginLeft: rendred ? 0 : -200,
    backgroundColor: note.color,
  });

  return <animated.div className="note" style={cardProps}></animated.div>;
};
