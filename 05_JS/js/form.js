/* form.js */
export function isPromoCodeValid(code) {
  code = code.trim();
  console.log(code);
  return code.length > 4 && code.length < 11;
}
