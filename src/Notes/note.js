import styles from "./index.module.css";
function Note(props) {
  const { id, title, body, deleteFn } = props;
  return (
    <li className={styles.list_Item}>
      <div className={styles.list_Item_top}>
        <h2>{title}</h2>
        <div className={styles.list_Item_icons}>
          <p>🖊</p>
          <p onClick={() => deleteFn(id)}>🗑</p>
        </div>
      </div>
      <p>{body}</p>
    </li>
  );
}

export default Note;
