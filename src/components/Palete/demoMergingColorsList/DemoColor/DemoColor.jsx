import React from "react";
import { getColorById } from "../../../../helpers/color";
import styles from "./DemoColor.module.scss";

const DemoColor = ({ colors, id, deleteMergingColorById }) => {
  return (
    <div
      className={styles.demo}
      style={{ background: getColorById(colors, id).hex }}
      onClick={() => deleteMergingColorById(id)}
    ></div>
  );
};

export default DemoColor;
