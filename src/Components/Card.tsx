import { useRef, useEffect, useState } from "react";
import trash from "../Assets/trash.svg";
import save from "../Assets/save.svg";
import "../Styles/Components/Card.scss";
import { Note } from "../utils/Note";

import { useSpring, animated } from "react-spring";

interface props {
  note: Note;
  index: number;
  updateNote: (note: Note, index: number) => void;
  deleteNote: (index: number) => void;
}
export const Card: React.FC<props> = ({
  note,
  index,
  updateNote,
  deleteNote,
  ...rest
}) => {
  const [animate, setAnimate] = useState(false);
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const isInitialMount = useRef(true);
  useEffect(() => {
    setValue(note.note);
    if (index == 0) {
      setAnimate(false);
      setTimeout(() => {
        setAnimate(true);
      }, 100);
    } else {
      console.log(note);
      console.log("changed index");
    }
  }, [note]);

  useEffect(() => {
    document.addEventListener(
      "keydown",
      function (e) {
        if (
          (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
          e.keyCode == 83
        ) {
          e.preventDefault();
          if (document.activeElement === textAreaRef.current) {
            console.log("clicked on ctrl+s on element at : " + index);
            saveButtonRef?.current?.click();
          }
        }
      },
      false
    );
  }, [textAreaRef, saveButtonRef, note]);
  const firstProp = useSpring({
    marginLeft: animate ? "1rem" : "-12.5rem",
    width: animate ? 310 : 0,
    height: animate ? 310 : 0,
    opacity: animate ? 1 : 0,
    backgroundColor: note.color,
  });

  const deleteButtonProps = useSpring({
    opacity: note?.note ? 1 : 0,
    height: note?.note ? "3rem" : "0rem",
    width: note?.note ? "3rem" : "0rem",
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
        ref={textAreaRef}
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
        <div
          className="edit"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {note.note ? (
            <animated.button
              style={deleteButtonProps}
              onClick={(_) => {
                deleteNote(index);
              }}
            >
              <animated.img src={trash} alt="delete Icon" />
            </animated.button>
          ) : (
            <></>
          )}
          <button
            disabled={value == note.note || !value}
            ref={saveButtonRef}
            onClick={(_) => {
              // if a note has an id with a length diffrent than 5, we wouldn't change it. if not create a new one
              console.log(note);
              const newNote = note;
              newNote.note = value;
              updateNote(newNote, index);
            }}
          >
            <animated.img src={save} alt="Save Icon" />
          </button>
        </div>
      </div>
    </animated.div>
  );
};
