import { useState } from "react";
import { Panel } from "./Components/Panel";
import { Sidemenu } from "./Components/SideMenu";
import "./Styles/App.scss";
import "./Styles/colors.scss";
import { Note } from "./utils/Note";

const colors = ["#ffcf7d", "#f0a177", "#b095f6", "#55cffa", "#e6ee96"];

function App() {
  const [selected, setselected] = useState<
    React.SetStateAction<number | null | undefined>
  >(null);

  const [notes, setNotes] = useState<Array<Note>>([]);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <Sidemenu
        setSelected={(index: number | null | undefined) => {
          console.log(index);
          setselected(index);

          if (index != null && index != undefined) {
            const aux = new Note(colors[index], "");
            notes.unshift(aux);
            console.log(notes);
            setNotes(notes);
          }
        }}
      />
      <Panel notes={notes} />
    </div>
  );
}

export default App;
