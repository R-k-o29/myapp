import styles from "./style.module.css";

export default function Stylecomp() {
  return (
    <>
      <h1 style={{ color: "red" }}>Style Components {2 + 2}</h1>

      <h1 className={styles.dummy}> Introcdutory of External CSS</h1>
      <h2 className={styles.dummy}> Begining of External CSS</h2>
      <button onClick={""}>submit</button>
    </>
  );
}
