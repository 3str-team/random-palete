import React from "react";
import DemoColor from "./DemoColor/DemoColor";
import styles from "./DemoColorsList.module.scss";

const DemoColorsList = ({ colors }) => {
  return (
    <div className={styles.list}>
      {colors.map((color) => {
        return <DemoColor key={color.id} colors={colors} id={color.id} />;
      })}
    </div>
  );
};

export default DemoColorsList;
