import React from "react"
 
import styles from "./jsx.module.css"
export function Jsxcomp() {
    return (
        <>
            <h1 style={{ color: "orange" }}>JSX Components {2 + 2}</h1>
            <p className={styles.dummy}>Welcome to the JSX session which you were watching</p>
            <button onClick={""}>submit</button>
        </>
    )
}