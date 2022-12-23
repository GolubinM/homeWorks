
/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
	return grades.length
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
 return grades.reduce((total,item)=>total+item)
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  return grades.reduce((total,item)=>total+item)/grades.length
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  return grades.filter((grade)=>grade>=10)
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  return grades.filter((grade)=>grade<10)
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  return grades.map((grade)=>grade+1)
}