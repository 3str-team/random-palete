import React from "react";
import DemoColor from "./DemoColor/DemoColor";
import styles from "./DemoColorsList.module.scss";

const DemoColorsList = ({ colorsState }) => {
  const [colors, setColors] = colorsState;

  const deleteMergingColorById = (id) => {
    setColors(colors.filter((color) => color.id !== id));
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
