import { useState } from "react";
import { Panel } from "../Components/Panel";
import { Sidemenu } from "../Components/SideMenu";
import "../Styles/Views/NoteView.scss";
import { Note } from "../utils/Note";

const colors = ["#ffcf7d", "#f0a177", "#b095f6", "#55cffa", "#e6ee96"];

function NoteView() {
  const [selected, setselected] = useState<
    React.SetStateAction<number | null | undefined>
  >(null);

  const [notes, setNotes] = useState<Array<Note>>([]);

  return (
    <div className="view">
      <Sidemenu
        setSelected={(index: number | null | undefined) => {
          setselected(index);
          if (index != null && index != undefined) {
            const aux = new Note(colors[index], "");
            notes.unshift(aux);
            setNotes(notes);
          }
        }}
      />
      <Panel
        notes={notes}
        updateNotes={(notes: Array<Note>) => {
          setNotes(notes);
        }}
      />
    </div>
  );
}

export default NoteView;
