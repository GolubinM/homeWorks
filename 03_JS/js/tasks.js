// task. Получить электронную почту
// Завершите функцию getEmail, чтобы она возвращала электронное письмо без начальных и конечных пробелов.

function getEmail(email) {
    return email.trim();
  };
  // Sample usage - do not modify
  console.log(getEmail("  alex@gmail.com  "));
  console.log(getEmail("  alex@gmail.com"));
  console.log(getEmail("bron@gmail.com   "));
  console.log("\n");
  
  // task. Получение имени
  // Завершите функцию **getName**, чтобы она преобразовывала полученное имя в верхний регистр и удаляла начальные и конечные пробелы.
  
  function getName(name) {
    let cleaned = name;
    cleaned = cleaned.toUpperCase();
    cleaned = cleaned.trim();
    return cleaned;
    // your code
  };
  
  // Sample usage - do not modify
  console.log(getName(" sam"));
  console.log(getName(" alex  "));
  