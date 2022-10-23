import { random } from "./random";

export const generateRandomColor = () => {
  let color = "#";
  const hexSymbols = "123456789abcdef";
  for (let i = 0; i < 6; ++i) {
    color += hexSymbols[random(0, hexSymbols.length - 1)];
  }
  return color;
};

export const hexToRGB = (color) => {
  return [
    parseInt(color[1] + color[2], 16),
    parseInt(color[3] + color[4], 16),
    parseInt(color[5] + color[6], 16),
  ];
};

export const getBrightness = (color) => {
  const rgb = hexToRGB(color);
  return (rgb[0] * 0.21 + rgb[1] * 0.72 + rgb[2] * 0.07) / 255;
};

export const mixColors = (colors) => {
  const rgb = [0, 0, 0];
  colors.forEach((color) => {
    rgb[0] += hexToRGB(color.hex)[0] / colors.length;
    rgb[1] += hexToRGB(color.hex)[1] / colors.length;
    rgb[2] += hexToRGB(color.hex)[2] / colors.length;
  });
  const resultHEX = [
    Math.round(rgb[0]).toString(16),
    Math.round(rgb[1]).toString(16),
    Math.round(rgb[2]).toString(16),
  ];
  const result =
    "#" +
    (resultHEX[0].length > 1 ? "" : "0") +
    resultHEX[0] +
    (resultHEX[1].length > 1 ? "" : "0") +
    resultHEX[1] +
    (resultHEX[2].length > 1 ? "" : "0") +
    resultHEX[2];
  console.log(rgb, resultHEX, result);
  return result;
};

export const getColorById = (colors, id) => {
  for (const color of colors) {
    if (color.id === id) {
      return color;
    }
  }
  return null;
};
