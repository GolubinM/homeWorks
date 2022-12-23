/* countries.js */
/**
 * @param {string[]} countries
 */
export function getDropdown(countries) {
  return countries.map((country) =>`<option value="${country.toLowerCase()}">${country}</option>`).join("");
}
