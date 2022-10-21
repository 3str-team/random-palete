import React, { useState } from "react";
import Column from "./components/Column/Column";
import RefreshButton from "./components/RefreshButton/RefreshButton";
import { generateRandomColor, mixColors } from "./helpers/color";
import "./styles/app.scss";

function App() {
  const [colors, setColors] = useState([
    "#ff0000",
    "#0000ff",
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ]);

  const updateColors = () => {
    let newColors = colors.map(() => {
      return generateRandomColor();
    });
    setColors(newColors);
  };

  const addColor = (color) => {
    setColors([...colors, color]);
  };

  const [mergingColors, setMergingColors] = useState([]);

  const mergeColors = (color) => {
    if (!mergingColors.length) {
      setMergingColors([color]);
      return;
    }
    if (mergingColors[0] === color) return;
    addColor(mixColors(color, mergingColors[0]));
    setMergingColors([]);
    return;
  };

  return (
    <div className="App">
      {colors.map((color, index) => {
        return (
          <Column
            key={index}
            background={color}
            generateRandomColor={generateRandomColor}
            mergeColors={mergeColors}
          />
        );
      })}
      <RefreshButton updateColors={updateColors} />
    </div>
  );
}

export default App;
