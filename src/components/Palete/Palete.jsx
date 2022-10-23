import React, { useState } from "react";
import Column from "../Column/Column";
import { generateRandomColor, mixColors } from "../../helpers/color";
import { v4 as uuidv4 } from "uuid";
import styles from "./Palete.module.scss";
import DemoColorsList from "./demoMergingColorsList/DemoColorsList";
import MergeButton from "./demoMergingColorsList/MergeButton/MergeButton";

const Palete = () => {
  const [colors, setColors] = useState([
    { id: uuidv4(), hex: "#000000" },
    { id: uuidv4(), hex: generateRandomColor() },
    { id: uuidv4(), hex: generateRandomColor() },
    { id: uuidv4(), hex: generateRandomColor() },
    { id: uuidv4(), hex: "#ffffff" },
  ]);
  const [mergingColors, setMergingColors] = useState([]);

  // const updateColors = () => {
  //   let newColors = colors.map((color) => {
  //     return { id: color.id, hex: generateRandomColor() };
  //   });
  //   setColors(newColors);
  // };

  const addColor = (color) => {
    setColors([...colors, { id: uuidv4(), hex: color }]);
  };

  const addMergingColor = (newColor) => {
    for (const color of mergingColors) {
      if (color.id === newColor.id || color.hex === newColor.hex) {
        return;
      }
    }
    console.log("Merging colors:", [...mergingColors, newColor]);
    setMergingColors([...mergingColors, newColor]);
  };

  const mergeColors = () => {
    if (!mergingColors.length) return;
    addColor(mixColors(mergingColors));
    setMergingColors([]);
  };

  return (
    <div className={styles.palete}>
      <section className={styles.columns}>
        {colors.map((color) => {
          return (
            <Column
              key={color.id}
              id={color.id}
              colorsState={[colors, setColors]}
              generateRandomColor={generateRandomColor}
              addMergingColors={addMergingColor}
            />
          );
        })}
      </section>

      <div className={styles.tools}>
        <div
          className={styles.merge}
          style={{ display: mergingColors.length ? "flex" : "none" }}
        >
          <DemoColorsList colors={mergingColors} />
          {mergingColors.length ? (
            <MergeButton
              mergeColorsFunc={mergeColors}
              mergingColors={mergingColors}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {/* <RefreshButton updateColors={updateColors} /> */}
    </div>
  );
};

export default Palete;
