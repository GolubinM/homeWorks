// ### task. Инициалы пользователя
// Завершите функцию `getInitials`, чтобы она возвращала инициалы пользователя.

const user1 = {
  firstName: "Sam",
  lastName: "Doe",
  age: 20,
};

const user2 = {
  firstName: "Charlie",
  lastName: "Fort",
  age: 31,
};

/**
 * @param {Object[]} user
 * @param {string} user[].firstName
 * @param {string} user[].lastName
 * @param {number} user[].age
 */
function getIntials(user) {
  return user?.firstName[0] + user?.lastName[0];
}

// Sample usage - do not modify
console.log(getIntials(user1)); // "SD"
console.log(getIntials(user2)); // "CF"

// --------------------------------------------------------------------------------

// ### task. Добавление чисел
// Завершите функцию `addNumberOfChapters`, чтобы она добавила ключ `numberOfChapters` в объект `course`.
const course1 = {
  name: "Learn English",
  isCompleted: true,
};

const course2 = {
  name: "Learn JavaScript",
  isCompleted: false,
};

/**
 * @param {Object[]} course
 * @param {number} count
 */
function addNumberOfChapters(course, count) {
  course.numberOfChapters = count;
  return course;
}

// Sample usage - do not modify
console.log(addNumberOfChapters(course1, 80)); // { name: 'Learn English', isCompleted: true, numberOfChapters: 80 }
console.log(addNumberOfChapters(course2, 60)); // { name: 'Learn JavaScript', isCompleted: false, numberOfChapters: 60 }

// --------------------------------------------------------------------------------

// ### task. Сумма оценок
// Завершите функцию `getSumOfGrades`, чтобы она возвращала сумму всех оценок.
// Вы можете использовать любой метод (reduce, forEach).

const student = {
  name: "Sam Doe",
  age: 24,
  grades: [13, 15, 15, 14, 18],
};

/**
 * @param {Object} student
 * @param {string} student.name
 * @param {number} student.age
 * @param {number[]} student.grades
 */
function getSumOfGrades(student) {
  return student?.grades.reduce((total, grade) => total + grade);
}

// Sample usage - do not modify
console.log(getSumOfGrades(student)); // 75

// --------------------------------------------------------------------------------

// ### task. Имя пользователя
// Завершите функцию `getLastUserFullName`, чтобы она возвращала полное имя последнего пользователя.

const users = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
function getLastUserFullNameWith(users) {
  with (users.at(-1)) {
    return `${firstName} ${lastName}`;
  }
}

// Sample usage - do not modify
console.log(getLastUserFullNameWith(users)); // "Charlie Bon"

// ---//----//

function getLastUserFullName(users) {
  obj = users.at(-1);
  return `${obj.firstName} ${obj.lastName}`;
}

// Sample usage - do not modify
console.log(getLastUserFullName(users)); // "Charlie Bon"

// --------------------------------------------------------------------------------

// ### task. Первая оценка студента
// Завершите функцию `getFirstStudentGrade`, чтобы она вернула оценку первого студента из курса обучения английскому.

const students = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students
 */
function getFirstStudentGrade(students) {
  return students[0].learnEnglish.grade;
}

// Sample usage - do not modify
console.log(getFirstStudentGrade(students)); // 18

// --------------------------------------------------------------------------------

// ### task. Сумма вложенных оценок
// Завершите функцию `getSumGrades`, чтобы она суммировала все оценки за курс `learnEnglish` в массиве.

const students2 = [
  {
    name: "Sam Doe",
    age: 24,
    learnEnglish: {
      startYear: 2020,
      grade: 18,
    },
  },
  {
    name: "Charlie Bron",
    age: 31,
    learnEnglish: {
      startYear: 2021,
      grade: 19,
    },
  },
];

/**
 * @typedef {{startYear: Number, grade: Number}} Course
 * @typedef {{name: String, age: Number, learnEnglish: Course}} Student
 *
 * @param {Student[]} students2
 */
function getSumGrades(students) {
  return students.reduce(
    (total, student) => total + student.learnEnglish.grade,
    0
  );
}

// Sample usage - do not modify
console.log(getSumGrades(students2)); // 37

// --------------------------------------------------------------------------------

// ### task. Имена пользователей
// Завершите функцию `getFullNames`, чтобы она возвращала массив содержащий полное имя каждого пользователя. Можно ли решить задачу с помощью метода `push()`?

const users2 = [
  {
    firstName: "Sam",
    lastName: "Blue",
    age: 21,
  },
  {
    firstName: "Charlie",
    lastName: "Bon",
    age: 38,
  },
];

/**
 * @param {{firstName: String, lastName: String, age: Number}[]} users
 */
function getFullNames(users) {
  return users.map((user) => `${user.firstName} ${user.lastName}`);
}

// Sample usage - do not modify
console.log(getFullNames(users2)); // [Sam Blue, Charlie Bon]


// ----------Используя push()-------------

function getFullNamesPush(users) {
  let arrFullNames = [];
  for (let user of users) {
    arrFullNames.push(`${user.firstName} ${user.lastName}`);
  }
  return arrFullNames;
}

// Sample usage - do not modify
console.log(getFullNamesPush(users2)); // [Sam Blue, Charlie Bon]

//------------------------------------------------------------------------

// ### task. Разделение объектов

// Завершите функцию `getLatLngElevation`, чтобы она деструктурировала объект `userLocation` на три переменные: `lat`, `lng` и `elevation`. По умолчанию `elevation` равен 0.

/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 * @param {number} [userLocation.elevation]
 */
const getLatLngElevation = (userLocation) => {
  const { lat, lng, elevation = 0 } = userLocation;
  return `${lat} ${lng} ${elevation}`;
};

// Sample usage - do not modify
const userLocation = {
  lat: 24.235235,
  lng: 2.5734,
};

console.log(getLatLngElevation(userLocation));
// The latitude is 24.235235, the longitude is 2.5734 and the elevation is 0 meters

// ---------------------------------------------------------------------
// ### task. Имя в нижнем регистре
// Завершите функцию `getFullName`, чтобы она возвращала полное имя в нижнем регистре, если данное поле существует. В противном случае функция должна вернуть `undefined`.

/**
 * @param {object} user
 * @param {object} [user.info]
 * @param {last} [user.info.name]
 */
const getFullName = (user) => {
  return user?.info?.name?.toLowerCase();
};

// Sample usage - do not modify
console.log(getFullName({ info: { name: "ALEX" } })); // "alex"
console.log(getFullName({ info: null })); // undefined
console.log(getFullName({})); // undefined

//------------------------------------------------------------------------

// ### task. Приветствие пользователя
// Доработайте функцию приветствия с использованием оператора `??`.
/**
 * @param {object} user
 * @param {string} [user.fullName]
 */
const getWelcomeMessage = (user) => {
  return `Welcome ${user?.fullName ?? "user"}`;
};

// Sample usage - do not modify
console.log(getWelcomeMessage({ fullName: "Sam Green" })); // "Welcome Sam Green"
console.log(getWelcomeMessage({})); // "Welcome user"

//------------------------------------------------------------------------

// ### task. Рефакторинг доступа к свойствам
// Перепишите функцию `getPaymentValue` без использования условий `if`.

/**
 * @param {object} user
 * @param {object} [user.payment]
 * @param {object} [user.payment.details]
 * @param {number} [user.payment.details.value]
 */
const getPaymentValue = (user) => {
  // if(user.payment && user.payment.details && user.payment.details.value) {
  //   return user.payment.details.value;
  // } else {
  //   return 0;
  // }
  return `${user?.payment?.details?.value ?? 0}`;
};

// Sample usage - do not modify
console.log(getPaymentValue({ id: 1, name: "Alex" })); // 0
console.log(
  getPaymentValue({ id: 2, name: "Sam", payment: { details: { value: 59 } } })
); // 59

//------------------------------------------------------------------------

// ### task. Рефакторинг условий
// Необходимо отрефакторить код (улучшить, оптимизировать) без использования условий.

/**
 * @param {string} host
 * @param {string} user
 * @param {Object} booking
 * @param {string} booking[].status
 */
const getStatus = (host, user, booking) => {
  // if (booking.status === "pending") {
  //   return `Hey ${user}, we're awaiting confirmation from ${host}.`;
  // } else if (booking.status === "confirmed") {
  //   return `Hey ${user}, ${host} is excited to be hosting you.`;
  // } else if (booking.status === "canceled") {
  //   return `Unfortunately ${user}, ${host} has canceled your booking request.`;
  // } else if (booking.status === "done") {
  //   return `${host} hopes you had a great stay.`;
  // } else {
  //   return "Unknown booking status."
  // }
  const messages = {
    pending: `Hey ${user}, we're awaiting confirmation from ${host}.`,
    confirmed: `Hey ${user}, ${host} is excited to be hosting you.`,
    canceled: `Unfortunately ${user}, ${host} has canceled your booking request.`,
    done: `${host} hopes you had a great stay.`,
  };
  return messages[booking?.status] ?? 'Unknown booking status.'
};

// Sample usage - do not modify
const booking1 = { status: "pending" };
console.log(getStatus("Sam", "Alex", booking1));
// "Hey Alex, we're awaiting confirmation from Sam."
const booking2 = { status: "confirmed" };
console.log(getStatus("Charlie", "Blake", booking2));
// "Hey Blake, Charlie is excited to be hosting you."
const booking3 = {status: undefined};
console.log(getStatus("William", "Moor", booking3));
// "Unknown booking status."
const booking4 = {};
console.log(getStatus("William", "Moor", booking4));
// "Unknown booking status."
