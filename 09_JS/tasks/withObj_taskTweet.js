// ### task. Твит
// Дан объект `tweet`, который представляет собой твит из учетной записи Twitter.
// Завершите функцию `getFullName`, чтобы она возвращала полное имя автора (разделенное пробелом).

const tweet = {
  id: 1080733626234937,
  message: `I just launched https://developer.mozilla.org
	👉 Resources for developers, by developers
	👉 Web technology for developers
	👉 Modern JavaScript & best practices
	👉 Documentation for Web developers`,
  link: "https://developer.mozilla.org",
  created_at: "2029-01-03 11:46:00",
  author: {
    id: 111834593,
    details: {
      firstName: "Alex",
      lastName: "Smith",
    },
    handle: "ASmith",
  },
};

/**
 * @param {Object} tweet
 */
function getFullName(tweet) {
  const obj = tweet.author.details;
  return `${obj?.firstName} ${obj?.lastName}`;
}

// Sample usage - do not modify
console.log(getFullName(tweet)); // "Alex Smith"

function getFullNameWith(tweet) {
  with (tweet.author.details) {
    return `${firstName} ${lastName}`;
  }
}
// !!! конструкция with(object){console.log(key1);console.log(key2);} не работает в strict mode.
//  При необходимости использования такой конструкции рекомендуется определять для названия объекта константу 

// Sample usage - do not modify
console.log(getFullNameWith(tweet)); // "Alex Smith"