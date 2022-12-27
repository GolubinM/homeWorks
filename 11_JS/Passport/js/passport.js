/* passport.js */
export default class Passport {
  /**
   * @param {string} firstName
   * @param {string} lastName
   */
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //
  getFirstName() {
    return this.firstName.toLowerCase();
  }
  getLastName() {
    return this.lastName.toUpperCase();
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getInitials() {
    return `${this.firstName[0]}.${this.lastName[0]}.`.toUpperCase();
  }
  getIsValidName() {
    const regAnyLetter = /[A-я]/;
    console.log(this.firstName.search(regAnyLetter) >= 0);
    console.log(this.lastName.search(regAnyLetter) >= 0);
    return this.firstName.search(regAnyLetter) >= 0 &&
      this.lastName.search(regAnyLetter) >= 0 &&
      !this.lastName.endsWith(".")
      ? "Yes"
      : "No";
  }
}
// Имя и фамилия должны СОДЕРЖАТЬ хотя бы одну букву,
// т.е. варинат '1~3 Sam' - is not valid, а варинат '1а~3 m22' - is valid.

//   `getFirstName`, который возвращает имя в нижнем регистре
// - `getLastName`, который возвращает фамилию в верхнем регистре
// - `getFullName`, который возвращает имя и фамилию, разделенные пробелом
// - `getInitials`, который возвращает первый символ имени в верхнем регистре, за которым следует символ точки, затем первый символ фамилии в верхнем регистре и символ точки
// - `getIsValidName`, который возвращает `"Yes"`, если имя содержит хотя бы одну букву и фамилия содержит хотя бы одну букву. Также фамилия не должна заканчиваться точкой. Во всех остальных случаях возвращает `"No"`.
