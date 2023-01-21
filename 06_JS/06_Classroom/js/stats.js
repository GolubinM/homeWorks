/* stats.js */
/**
 * @param {array} grades
 */
export function getNumberOfGrades(grades) {
  return grades.length;
  // your code
}

/**
 * @param {array} grades
 */
export function getFirstGrade(grades) {
  return grades?.[0];
  // your code
}

/**
 * @param {array} grades
 */
export function getLastGrade(grades) {
  return grades?.at(-1);
  // your code
}
