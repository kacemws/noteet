import { useEffect, useState } from "react";
import { getNotes, postNote, updateNote } from "../api/notes.instance";
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
        const data = resp?.data?.notes?.map((note: any) => {
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
            const note = notes.find((note) => note.id == id);
            // console.log(note);
            setFetchingNotes(true);
            console.log({ type, note });
            try {
              if (type == "add") {
                await postNote({
                  value: note?.note,
                  color: note?.color,
                });
              } else if (type == "update") {
                await updateNote({
                  id: note?.id,
                  value: note?.note,
                  color: note?.color,
                });
              } else {
                console.log(id);
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
