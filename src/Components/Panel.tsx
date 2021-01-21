import "../Styles/Components/Panel.scss";
import { Note } from "../utils/Note";
import { Card } from "./Card";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useCallback } from "react";
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

  const handleDragEnd = useCallback(
    ({ source, destination }) => {
      if (!destination) return;
      const newItems = notes.slice(); // Duplicate
      const [temp] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, temp);

      updateNotes(newItems);
    },
    [notes]
  );

  return (
    <div className="panel">
      <div className="header">
        <h2>Your Notes</h2>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="notes">
          {(provided) => (
            <div
              className="notes"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {notes.map((note, index) => {
                return (
                  <Draggable draggableId={note.id} key={note.id} index={index}>
                    {(provided) => (
                      <Card
                        provided={provided}
                        note={note}
                        index={index}
                        updateNote={updateSingleNote}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
