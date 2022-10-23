import React from "react";
import { getColorById } from "../../../../helpers/color";
import styles from "./DemoColor.module.scss";

const DemoColor = ({ colors, id, deleteMergingColorById }) => {
  const deleteMergingColor = () => {
    deleteMergingColorById(id);
  };
  return (
    <div
      className={styles.demo}
      style={{ background: getColorById(colors, id).hex }}
      onClick={deleteMergingColor}
    ></div>
  );
};

export default DemoColor;
