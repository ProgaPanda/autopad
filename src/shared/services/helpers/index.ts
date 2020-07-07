/**
 * Converts RGB color object to CMYK color string
 * @param rgb rgb object
 * @returns CMYK color string
 */
export const rgbToCmyk = (rgb: { r: number; g: number; b: number }) => {
  const { r, g, b } = rgb;

  // Black
  if (r === 0 && g === 0 && b === 0) {
    return "(0, 0, 0, 1)";
  }

  let computedC = 1 - r / 255;
  let computedM = 1 - g / 255;
  let computedY = 1 - b / 255;

  const minCMY = Math.min(computedC, Math.min(computedM, computedY));

  computedC = (computedC - minCMY) / (1 - minCMY);
  computedM = (computedM - minCMY) / (1 - minCMY);
  computedY = (computedY - minCMY) / (1 - minCMY);
  const computedK = minCMY;

  return `(${computedC}, ${computedM}, ${computedY}, ${computedK})`;
};
