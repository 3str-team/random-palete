import React, { useState } from "react";
import { getBrightness, getColorById } from "../../helpers/color";
import { v4 as uuidv4 } from "uuid";
import styles from "./Column.module.scss";
import { useEffect } from "react";

const Column = ({ colorsState, id, generateRandomColor, addMergingColors }) => {
  const [colors, setColors] = colorsState;
  const [isLock, setLock] = useState(false);
  const [columnBackground, setColumnBackground] = useState(
    getColorById(colors, id)
  );

  const lockToggle = (event) => {
    setLock(!isLock);
    event.stopPropagation();
  };

  const copyColor = (event) => {
    event.target.parentNode.classList.add("copied");
    setTimeout(() => {
      event.target.parentNode.classList.remove("copied");
    }, 1000);
    navigator.clipboard.writeText(columnBackground.hex);
    event.stopPropagation();
  };

  const setColor = (color) => {
    if (isLock) return;
    setColumnBackground(color);
  };

  const setRandomColor = () => {
    setColor({ id: uuidv4(), hex: generateRandomColor() });
  };

  useEffect(() => {
    setColor(getColorById(colors, id));
  }, [getColorById(colors, id)]);

  const functionBtns = [
    {
      id: 1,
      icon: isLock ? (
        <i className={"bx bxs-lock-alt"}></i>
      ) : (
        <i className="bx bxs-lock-open-alt"></i>
      ),
      func: lockToggle,
    },
    {
      id: 2,
      icon: <i className="bx bxs-add-to-queue"></i>,
      func: (event) => {
        addMergingColors(columnBackground);
        event.stopPropagation();
      },
    },
    {
      id: 3,
      icon: <i className="bx bxs-trash-alt"></i>,
      func: (event) => {
        if (isLock) return;
        const newColors = [];
        [...colors].forEach((color) => {
          if (color.id !== id) {
            newColors.push(color);
          }
        });
        setColors(newColors);
        event.stopPropagation();
      },
    },
  ];

  return (
    <div
      className={styles.column}
      style={{
        background: columnBackground.hex,
        color: getBrightness(columnBackground.hex) <= 0.5 ? "white" : "black",
      }}
      onClick={setRandomColor}
    >
      <h2 className={styles.colorName} onClick={copyColor}>
        {columnBackground.hex}
      </h2>

      <ul className={styles.menu}>
        {functionBtns.map((btn) => {
          return (
            <li key={btn.id} className={styles.functionBtnWrapper}>
              <span
                className={
                  isLock && btn.id === 1 ? styles.lockedBtn : styles.functionBtn
                }
                onClick={btn.func}
              >
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
