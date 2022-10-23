import React from "react";
import { mixColors } from "../../../../helpers/color";
import styles from "./MergeButton.module.scss";

const MergeButton = ({ mergeColorsFunc, mergingColors }) => {
  return (
    <button className={styles.mergeBtn} onClick={mergeColorsFunc}>
      <div
        className={styles.demoMerging}
        style={{ background: mixColors(mergingColors) }}
      ></div>
      Merge
    </button>
  );
};

export default MergeButton;
