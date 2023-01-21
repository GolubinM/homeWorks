/* shopping.js */
/**
 * @param {string[]} items
 * @param {string} item
 */
export function addItem(items, item) {
  items.push(item);
  return items;
}

/**
 * @param {string[]} items
 */
export function exportLowerCasedCSV(items) {
  return items.map((item) => item.toLowerCase()).join(", ");
}
