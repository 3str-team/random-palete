import React from "react";
import styles from "./RefreshButton.module.scss";

const RefreshButton = ({ updateColors }) => {
  return (
    <button className={styles.refresh} onClick={updateColors}>
      <i className="bx bx-refresh"></i>
    </button>
  );
};

export default RefreshButton;
