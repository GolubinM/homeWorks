/* surface-difference.js */
export default function calculateDifference(firstRectangle, secondRectangle) {
  console.log("first rectangle", firstRectangle);
  console.log("second rectangle", secondRectangle);
  let areaFirstRectangle = firstRectangle[0] * firstRectangle[1];
  let areaSecondRectangle = secondRectangle[0] * secondRectangle[1];
  return Math.abs(areaFirstRectangle - areaSecondRectangle);
}
