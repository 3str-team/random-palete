import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getBrightness } from "../../helpers/color";
import styles from "./Column.module.scss";

const Column = ({
  background = "#ffffff",
  generateRandomColor,
  mergeColors,
}) => {
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

  const setColor = (color) => {
    if (isLock) return;
    setColumnBackground(color);
  };

  const setRandomColor = () => {
    setColor(generateRandomColor());
  };

  useEffect(() => {
    setColor(background);
  }, [background]);

  const functionBtns = [
    {
      id: 1,
      icon: isLock ? (
        <i className="bx bxs-lock-alt"></i>
      ) : (
        <i className="bx bxs-lock-open-alt"></i>
      ),
      func: lockToggle,
    },
    {
      id: 2,
      icon: <i className="bx bxs-add-to-queue"></i>,
      func: (event) => {
        mergeColors(columnBackground);
        event.stopPropagation();
      },
    },
  ];

  return (
    <div
      className={styles.column}
      style={{
        background: columnBackground,
        color: getBrightness(columnBackground) <= 0.5 ? "white" : "black",
      }}
      onClick={setRandomColor}
    >
      <h2 className={styles.colorName} onClick={copyColor}>
        {columnBackground}
      </h2>

      <ul className={styles.menu}>
        {functionBtns.map((btn) => {
          return (
            <li key={btn.id} className={styles.functionBtnWrapper}>
              <span className={styles.functionBtn} onClick={btn.func}>
                {btn.icon}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Column;
