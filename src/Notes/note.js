import styles from "./index.module.css";
import { Link } from "react-router-dom";
function Note(props) {
  const { id, title, body, deleteFn } = props;
  return (
    <li className={styles.list_Item}>
      <div className={styles.list_Item_top}>
        <h2>{title}</h2>
        <div className={styles.list_Item_icons}>
          <Link to={`/note/${id}`}>
            <p>🖊</p>
          </Link>
          <p onClick={() => deleteFn(id)}>🗑</p>
        </div>
      </div>
      <p>{body}</p>
    </li>
  );
}

export default Note;
