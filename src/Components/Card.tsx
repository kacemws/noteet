import { useEffect, useState } from "react";
import edit from "../Assets/edit.svg";
import save from "../Assets/save.svg";
import "../Styles/Components/Card.scss";
import { Note } from "../utils/Note";

import { useSpring, animated } from "react-spring";

interface props {
  note: Note;
  index: number;
  updateNote: (note: Note, index: number) => void;
}
export const Card: React.FC<props> = ({ note, index, updateNote, ...rest }) => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(note.note);
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
    width: animate ? 310 : 0,
    height: animate ? 310 : 0,
    opacity: animate ? 1 : 0,
    backgroundColor: note.color,
  });
  const cardProps = useSpring({
    backgroundColor: note.color,
  });
  return (
    <animated.div
      key={note.id}
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
          <span>
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(Date.parse(note.date.toDateString()))}
          </span>
        </div>
        <div className="edit">
          <button
            disabled={value == note.note || !value}
            onClick={(_) => {
              updateNote(new Note(note.color, value), index);
            }}
          >
            <animated.img src={note.note ? edit : save} alt="Edit Icon" />
          </button>
        </div>
      </div>
    </animated.div>
  );
};
