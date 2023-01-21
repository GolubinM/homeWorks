// project. Валидатор промо кода
/* Предположим, у нас есть форма, которая принимает промокод.
Промокод считается действительным только в том случае, если его длина от 5 до 10 символов (включительно).
Завершите функцию **isPromoCodeValid**, чтобы она возвращала значение `true`, когда промокод действителен
и `false` в противном случае. */
import {isPromoCodeValid} from "./form.js"

const code = document.querySelector("#promo-code")

code.addEventListener("keyup", () => {
  let result = isPromoCodeValid(code.value)
  if (result) {
    code.classList.remove("error")
  } else {
    code.classList.add("error")
  }
})