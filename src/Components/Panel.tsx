import "../Styles/Components/Panel.scss";
import { Note } from "../utils/Note";
import { Card } from "./Card";
interface props {
  notes: Array<Note>;
}

export const Panel: React.FC<props> = ({ notes }) => {
  return (
    <div className="panel">
      <div className="header">
        <h2>Your Notes</h2>
      </div>

      <div className="notes">
        {notes.map((_) => {
          return <Card />;
        })}
      </div>
    </div>
  );
};
