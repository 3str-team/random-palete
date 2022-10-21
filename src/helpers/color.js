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

export const mixColors = (color1, color2) => {
  const rgb1 = hexToRGB(color1);
  const rgb2 = hexToRGB(color2);
  const resultHEX = [
    Math.round((rgb1[0] + rgb2[0]) / 2).toString(16),
    Math.round((rgb1[1] + rgb2[1]) / 2).toString(16),
    Math.round((rgb1[2] + rgb2[2]) / 2).toString(16),
  ];
  const result =
    "#" +
    (resultHEX[0].length > 1 ? "" : "0") +
    resultHEX[0] +
    (resultHEX[1].length > 1 ? "" : "0") +
    resultHEX[1] +
    (resultHEX[2].length > 1 ? "" : "0") +
    resultHEX[2];
  console.log(rgb1, rgb2, resultHEX, result);
  return result;
};
