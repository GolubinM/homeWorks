/* helpers.js */
import translations from "./translations.js";


/**
 * @param {string} language
 */
export const getTranslation = (language) => {
  return translations.welcome[language] ?? "Welcome";
};