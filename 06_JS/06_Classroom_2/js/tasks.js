// ----------------------------------------------------------------------------------------------

// task. Конвертирование строки
// Завершите функцию `convertToString`, чтобы она возвращала строку из полученного массива `grades`.
/**
 * @param {array} grades
 */
function convertToString(grades) {
  return 	grades.join(' & ')
  // your code
}
console.log('\ntask. Конвертирование строки');
// Sample usage - do not modify
console.log(convertToString([10, 15, 13, 19])); // "10 & 15 & 13 & 19"
console.log(convertToString([7, 13, 20, 15])); // "7 & 13 & 20 & 15"


// task. Экспорт CSV
// Завершите функцию `exportCSV`, чтобы она возвращала строку CSV из массива `grades`.
/**
 * @param {array} grades
 */
function exportCSV(grades) {
	return 	grades.join(', ')
  // your code
}

console.log('\ntask. Экспорт CSV');
// Sample usage - do not modify
console.log(exportCSV([10, 15, 13, 19])); // "10, 15, 13, 19"
console.log(exportCSV([7, 13, 20, 15])); // "7, 13, 20, 15"
