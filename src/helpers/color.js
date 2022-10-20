import { random } from "./random";

export const generateRandomColor = () => {
  let color = "#";
  const hexSymbols = "123456789abcdef";
  for (let i = 0; i < 6; ++i) {
    color += hexSymbols[random(0, hexSymbols.length - 1)];
  }
  return color;
};

export const getBrightness = (color) => {
  const rgb = [
    parseInt(color[1] + color[2], 16),
    parseInt(color[3] + color[4], 16),
    parseInt(color[5] + color[6], 16),
  ];
  console.log(rgb, (rgb[0] * 0.21 + rgb[1] * 0.72 + rgb[2] * 0.07) / 255);
  return (rgb[0] * 0.21 + rgb[1] * 0.72 + rgb[2] * 0.07) / 255;
};
