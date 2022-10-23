import React from "react";
import DemoColor from "./DemoColor/DemoColor";
import styles from "./DemoColorsList.module.scss";

const DemoColorsList = ({ colorsState }) => {
  const [colors, setColors] = colorsState;

  const deleteMergingColorById = (id) => {
    const newColors = [];
    for (const color of colors) {
      if (color.id !== id) newColors.push(color);
      setColors(newColors);
    }
  };

  return (
    <div className={styles.list}>
      {colors.map((color) => {
        return (
          <DemoColor
            key={color.id}
            colors={colors}
            id={color.id}
            deleteMergingColorById={deleteMergingColorById}
          />
        );
      })}
    </div>
  );
};

export default DemoColorsList;
