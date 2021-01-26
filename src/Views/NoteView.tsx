import { useEffect, useState } from "react";
import {
  deleteNote,
  getNotes,
  postNote,
  updateNote,
} from "../api/notes.instance";
import Loader from "../Components/Loader";
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

  const [fetchingNotes, setFetchingNotes] = useState(true);

  useEffect(() => {
    getNotes()
      .then((resp) => {
        setFetchingNotes(false);
        const data = resp?.notes?.map((note: any) => {
          return {
            id: note["_id"],
            color: note.color,
            note: note.value,
            date: new Date(note.createdAt),
          };
        });
        setNotes(data ?? []);
      })
      .catch((err) => {
        console.log({ err });
      });
  }, []);

  return (
    <div className="view">
      <Sidemenu
        setSelected={(index: number | null | undefined) => {
          if (!fetchingNotes) {
            setselected(index);
            if (index != null && index != undefined) {
              const aux = new Note(colors[index], "");
              notes.unshift(aux);
              setNotes(notes);
            }
          }
        }}
      />
      {fetchingNotes ? (
        <Loader />
      ) : (
        <Panel
          notes={notes}
          updateNotes={async (
            notes: Array<Note>,
            type: "add" | "delete" | "update",
            id?: string
          ) => {
            const index = notes.findIndex((note) => note.id == id);
            // console.log(note);
            setFetchingNotes(true);
            console.log({ type, note: notes[index] });
            try {
              if (type == "add") {
                const answ = await postNote({
                  value: notes[index]?.note,
                  color: notes[index]?.color,
                });
                notes[index].id = answ?.id;
              } else if (type == "update") {
                await updateNote({
                  id: notes[index]?.id,
                  value: notes[index]?.note,
                  color: notes[index]?.color,
                });
              } else {
                await deleteNote({
                  id,
                });
              }
              setFetchingNotes(false);

              setNotes(notes);
            } catch (err) {
              console.log(err);
              setFetchingNotes(false);
            }
          }}
        />
      )}
    </div>
  );
}

export default NoteView;
