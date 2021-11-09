import classes from "./index.module.css";
import Input from "../components/input/index";
import Button from "../components/button/index";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

function Note() {
  const [title, setTile] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();

  const noteHandler = (e) => {
    e.preventDefault();
    console.log(title, description);
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
            change={setTile}
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
