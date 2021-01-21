import "../Styles/Components/Panel.scss";
import { Note } from "../utils/Note";
import { Card } from "./Card";
interface props {
  notes: Array<Note>;
  updateNotes: (notes: Array<Note>) => void;
}

export const Panel: React.FC<props> = ({ notes, updateNotes, ...rest }) => {
  const updateSingleNote = (note: Note, index: number) => {
    const newNotes = [...notes];
    newNotes[index] = note;
    console.log({ index, notes: newNotes });

    updateNotes(newNotes);
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
            />
          );
        })}
      </div>
    </div>
  );
};
