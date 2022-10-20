import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./Column.module.scss";

const Column = ({ background = "#ffffff", generateRandomColor }) => {
  const [isLock, setLock] = useState(false);
  const [columnBackground, setColumnBackground] = useState(background);

  const lockToggle = (event) => {
    setLock(!isLock);
    event.stopPropagation();
  };

  const copyColor = (event) => {
    event.target.parentNode.classList.add("copied");
    setTimeout(() => {
      event.target.parentNode.classList.remove("copied");
    }, 1000);
    navigator.clipboard.writeText(columnBackground);
    event.stopPropagation();
  };

  const setRandomColor = () => {
    if (isLock) return;
    setColumnBackground(generateRandomColor());
  };

  useEffect(() => {
    if (!isLock) {
      setColumnBackground(background);
    }
  }, [background]);

  return (
    <div
      className={styles.column}
      style={{ background: columnBackground }}
      onClick={setRandomColor}
    >
      <h2 className={styles.colorName} onClick={copyColor}>
        {columnBackground}
      </h2>

      <button onClick={lockToggle} className={styles.lockBtn}>
        {isLock ? (
          <i className="bx bxs-lock-alt"></i>
        ) : (
          <i className="bx bxs-lock-open-alt"></i>
        )}
      </button>
    </div>
  );
};

export default Column;
