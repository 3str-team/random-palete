import React, { useState } from "react";
import Column from "./components/Column/Column";
import RefreshButton from "./components/RefreshButton/RefreshButton";
import { random } from "./helpers/random";
import "./styles/app.scss";

function App() {
  const [colors, setColors] = useState([
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ]);

  const generateRandomColor = () => {
    let color = "#";
    const hexSymbols = "123456789abcdef";
    for (let i = 0; i < 6; ++i) {
      color += hexSymbols[random(0, hexSymbols.length - 1)];
    }
    return color;
  };

  const updateColors = () => {
    let newColors = colors.map(() => {
      return generateRandomColor();
    });
    setColors(newColors);
  };

  return (
    <div className="App">
      {colors.map((color, index) => {
        return (
          <Column
            key={index}
            background={color}
            generateRandomColor={generateRandomColor}
          />
        );
      })}
      <RefreshButton updateColors={updateColors} />
    </div>
  );
}

export default App;
