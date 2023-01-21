// -------------------------------------------------------------------------------
// task. Получение цены билета
// Завершите функцию getTicketPrice, чтобы она возвращала стоимость поездки на поезде в центах.
// Стоимость проезда на поезде равна 20 долларам США (2000 центов).
// Однако пользователи моложе 18 и старше 60 лет получают скидку в 50%.
/**
 * @param {number} age
 */
//------------Вариант 1 ---------------------------
function getTicketPrice_v1(age) {
    priceInDollars = 20;
    let PriceWithDiscountPercents = 100;
  
    if (age >= 60 || age < 18) {
      PriceWithDiscountPercents = 50;
    }
    return 20 * PriceWithDiscountPercents;
  }
  
  //------------Вариант 2 ---------------------------
  function getTicketPrice(age) {
    let priceInDollars = 20;
    return age >= 60 || age < 18 ? (priceInDollars *= 50) : (priceInDollars *= 100);
  }
  
  
  // Sample usage - do not modify
  console.log('// task. Получение цены билета. If Else');
  console.log(getTicketPrice_v1(15)); // 1000
  console.log(getTicketPrice_v1(30)); // 2000
  console.log(getTicketPrice_v1(45)); // 2000
  console.log(getTicketPrice_v1(75)); // 1000
  console.log('// task. Получение цены билета. Ternary operator');
  console.log(getTicketPrice(15)); // 1000
  console.log(getTicketPrice(30)); // 2000
  console.log(getTicketPrice(45)); // 2000
  console.log(getTicketPrice(75)); // 1000
  
  // -------------------------------------------------------------------------------
  
  /* task. Просмотр блога
  Вы пишете функцию, с помощью которой пользователи публикуют статьи.
  Завершите функцию `canPreviewArticle`, чтобы она возвращала:
  - `true` если пользователь "admin" или параметр `isAuthor`
  (пользователь является автором статьи, поэтому имеет возможность
  предварительного просмотра) является истинным */
  
  /**
   * @param {string} type
   * @param {boolean} isAuthor
   */
   function canPreviewArticle(type, isAuthor) {
    return type === 'admin' || isAuthor;
      // your code
  }
  console.log('// task. Просмотр блога');
  // Sample usage - do not modify
  console.log(canPreviewArticle("admin", false)); // true
  console.log(canPreviewArticle("admin", true)); // true
  console.log(canPreviewArticle("user", true));  // true
  console.log(canPreviewArticle("user", false)); // false
  
  // -------------------------------------------------------------------------------
  
  // task. Пользовательский план
  /* 
  Завершите функцию `getUserPlan`, чтобы:
  - она возвращала строку 'Pro', когда пользователь оплатил и выполнил не менее 10 заданий (включительно)
  - она возвращала строку 'Trial' во всех остальных случаях */
  
  /**
   * @param {boolean} hasPaid
   * @param {number} completedChallenges
   */
   function getUserPlan(hasPaid, completedChallenges) {
      return hasPaid && completedChallenges>10 ? 'Pro' : 'Trial';
    // your code
  }
  
  console.log('// task. Пользовательский план');
  // Sample usage - do not modify
  console.log(getUserPlan(true, 5)); // "Trial"
  console.log(getUserPlan(true, 20)); // "Pro"
  console.log(getUserPlan(false, 5)); // "Trial"
  console.log(getUserPlan(false, 20)); // "Trial"
  
  // -------------------------------------------------------------------------------
  
  
  