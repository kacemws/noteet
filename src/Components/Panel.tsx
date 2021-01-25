import "../Styles/Components/Panel.scss";
import { Note } from "../utils/Note";
import { Card } from "./Card";
interface props {
  notes: Array<Note>;
  updateNotes: (
    notes: Array<Note>,
    type: "add" | "delete" | "update", // to know the type of operation to do with the db
    id: string
  ) => void;
}

export const Panel: React.FC<props> = ({ notes, updateNotes, ...rest }) => {
  const updateSingleNote = (note: Note, index: number) => {
    const newNotes = [...notes];
    const auxNote = newNotes[index];
    newNotes[index] = note;
    console.log({ index, notes: newNotes });

    updateNotes(newNotes, auxNote.note == "" ? "add" : "update", note.id);
  };

  const deleteNote = (index: number) => {
    const newNotes = [...notes];
    const note = newNotes.splice(index, 1);
    console.log({ index, notes: newNotes });

    updateNotes(newNotes, "delete", note[0].id);
  };

  return (
    <div className="panel">
      <div className="header">
        <h2>Your Notes</h2>
      </div>

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
  );
};
