import classes from "./index.module.css";
import Note from "./note";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    // IIFE
    (async () => {
      const res = await fetch("http://localhost:3009/notes", {
        method: "GET",
      });
      const response = await res.json();

      setNotes(response);
      console.log(response);
    })();
  }, []);

  async function deleteNote(id) {
    try {
      const res = await fetch("http://localhost:3009/notes/" + id, {
        method: "DELETE",
      });
      const response = await res.json();
      console.log(response);

      const tempNotes = [...notes];

      const filteredNotes = tempNotes.filter((tempNote) => {
        return tempNote._id !== id;
      });

      setNotes(filteredNotes);
    } catch (error) {
      console.log("Something went unexpected!");
      console.log(error);
    }
  }

  return (
    <div>
      <Link to="/note">
        <button className={classes.btn}>Add New Note</button>
      </Link>
      <ul className={classes.list}>
        {notes.map(function (note) {
          return (
            <Note
              key={note._id}
              id={note._id}
              deleteFn={deleteNote}
              title={note.title}
              body={note.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Notes;
