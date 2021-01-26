import "../Styles/Components/Panel.scss";
import { Note } from "../utils/Note";
import { Card } from "./Card";
import { Toast } from "./Toast";
import logout from "../Assets/logout.svg";
import Cookies from "js-cookie";

interface props {
  notes: Array<Note>;
  fetching: {
    state: boolean;
    action: "delete" | "add";
  };
  updateNotes: (
    notes: Array<Note>,
    type: "add" | "delete" | "update", // to know the type of operation to do with the db
    id: string
  ) => void;
}

export const Panel: React.FC<props> = ({
  notes,
  updateNotes,
  fetching,
  ...rest
}) => {
  const updateSingleNote = (note: Note, index: number) => {
    if (!fetching?.state) {
      const newNotes = [...notes];
      newNotes[index] = note;
      console.log({ note, index, notes: newNotes });

      updateNotes(newNotes, note.id.length == 5 ? "add" : "update", note.id);
    }
  };

  const deleteNote = (index: number) => {
    if (!fetching?.state) {
      const newNotes = [...notes];
      const note = newNotes.splice(index, 1);
      console.log({ index, notes: newNotes });

      updateNotes(newNotes, "delete", note[0].id);
    }
  };

  return (
    <>
      <div className="panel">
        <div className="header">
          <h2>Your Notes</h2>
          <button
            className="logout-button"
            onClick={() => {
              Cookies.set("accessToken", "");
              localStorage.removeItem("refreshToken");
            }}
          >
            <img src={logout} alt="Logout Icon" />
          </button>
        </div>
        <div className="notes-wrapper">
          <div className="notes">
            {notes.map((note, index) => {
              return (
                <Card
                  key={index}
                  note={note}
                  index={index}
                  updateNote={updateSingleNote}
                  deleteNote={deleteNote}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Toast
        style={fetching.action == "add" ? "success" : "danger"}
        animate={fetching.state}
      />
    </>
  );
};
