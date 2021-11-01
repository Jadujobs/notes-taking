import styles from "./index.module.css";
import Note from "./note";
import { useState } from "react";
function Notes() {
  const [notes, setNotes] = useState([
    {
      id: "1",
      title: "CS101",
      body: "try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
    },
    {
      id: "2",
      title: "CS102",
      body: "try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
    },
    {
      id: "3",
      title: "CS103",
      body: "try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
    },
    {
      id: "4",
      title: "CS103",
      body: "try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
    },
    {
      id: "5",
      title: "CS103",
      body: "try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining ",
    },
  ]);

  function deleteNote(id) {
    const tempNotes = [...notes];

    const filteredNotes = tempNotes.filter((tempNote) => {
      return tempNote.id !== id;
    });

    setNotes(filteredNotes);
  }
  return (
    <div>
      <ul className={styles.list}>
        {notes.map(function (note) {
          return (
            <Note
              key={note.id}
              id={note.id}
              deleteFn={deleteNote}
              title={note.title}
              body={note.body}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Notes;
