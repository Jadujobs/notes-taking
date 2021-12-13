import classes from "./index.module.css";
import Input from "../components/input/index";
import Button from "../components/button/index";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function Note() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  useEffect(() => {
    // IIFE
    if (id === undefined) return;

    (async () => {
      const res = await fetch("http://localhost:3009/notes/" + id, {
        method: "GET",
      });
      const response = await res.json();

      setTitle(response.title);
      setDescription(response.description);
      console.log(response);
    })();
  }, []);

  const noteHandler = async (e) => {
    e.preventDefault();

    // Add a new note
    if (id === undefined) {
      try {
        const res = await fetch("http://localhost:3009/notes", {
          method: "POST",
          body: JSON.stringify({
            title,
            description,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const response = await res.json();

        console.log(response);
        history.push("/notes");
      } catch (error) {
        console.log("Something went unexpected!");
        console.log(error);
      }
    } else {
      try {
        const res = await fetch("http://localhost:3009/notes/" + id, {
          method: "PUT",
          body: JSON.stringify({ title, description }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const response = await res.json();

        console.log(response);
        history.push("/notes");
      } catch (error) {
        console.log("Something went unexpected!");
        console.log(error);
      }
    }
  };

  return (
    <div className={classes.container}>
      <h1>Note</h1>

      <form onSubmit={noteHandler}>
        <div className={classes.formGroup}>
          <label htmlFor="title">Title:</label>
          <Input
            styling={classes.title}
            type="title"
            value={title}
            change={setTitle}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            className={classes.description}
            type="description"
            placeholder="Your Description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>

        <Button val={id === undefined ? "Add" : "Edit"} />
      </form>

      <Link to="/notes">Cancel</Link>
    </div>
  );
}

export default Note;
