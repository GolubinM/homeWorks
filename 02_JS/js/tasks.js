//task. Имя в верхнем регистре
function getUpperCaseName(name) {
  return name.toUpperCase();
}
console.log(getUpperCaseName("sam")); // SAM
console.log(getUpperCaseName("alex")); // ALEX
console.log(getUpperCaseName("Johnny")); // JOHNNY
console.log("\n");

//task. Имя в нижнем регистре
function getLowerCaseName(name) {
  return name.toLowerCase();
}
console.log(getLowerCaseName("SAM"));
console.log(getLowerCaseName("ALEX"));
console.log(getLowerCaseName("JoHNnY"));
console.log("\n");

// task. Описание возраста
function getAgeDescription(age) {
  return "You are currently " + age + " years old";
}
console.log(getAgeDescription(18));
console.log(getAgeDescription(20));
console.log("\n");


// task. Уведомление почты
function showEmailConfirmation(email) {
  return `We just sent an email to ${email}. Please check your inbox.`;
}
console.log(showEmailConfirmation("sam@example.com"));
console.log(showEmailConfirmation("alex@example.com"));
console.log("\n");

// task. FizzBuzz.
function FizzBuzz(begin, end) {
  let message = "";
  while (begin <= end) {
    if (!(begin % 3)) {
      message = "Fizz";
    }
    if (!(begin % 5)) {
      message = message + "Buzz";
    }
    if (message == "") {
      message = begin;
    }
    console.log(message);
    message = "";
    begin++;
  }
  return;
};

FizzBuzz(11, 20);
FizzBuzz("11sdf", 20);
FizzBuzz(11, -20);
FizzBuzz();
