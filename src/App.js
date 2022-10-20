import React, { useState } from "react";
import Column from "./components/Column/Column";
import RefreshButton from "./components/RefreshButton/RefreshButton";
import { generateRandomColor } from "./helpers/color";
import "./styles/app.scss";

function App() {
  const [colors, setColors] = useState([
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ]);

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
