// ### task. **Получить завершенные главы**
// Представим, что вы пишете компонент `sidebar` с названиями глав из книги для отображения их в браузере. Списки глав находятся по `[endpoint](https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json)`. Напишите `fetch` запрос и выведите массив объектов тех глав, которые являются `isCompleted`.

// !!!Реализовать интерфейс для выведени книг на страницу. При выставлении true в чекбоксе, показывать только те главы, которые дописаны.

const navPlacement = document.querySelector(".navsidebar");
const chkBox = document.querySelector(".checkbox");
const getChapters = () => {
  let chapters = [];
  const url =
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/chapters/all.json";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (chkBox.checked) {
        chapters = data.filter((e) => e.isCompleted);
      } else {
        chapters = data;
      }
      renderChapters(chapters);
      // По требованию из ДЗ (с учетом состояния checkbox)==========
      displayCompletedChapters(chapters);
    });
};

// do NOT modify this function
function displayCompletedChapters(chapters) {
  console.log("Received", chapters);
}

// Sample usage - do not modify
getChapters();

chkBox.addEventListener("click", getChapters);
function renderChapters(chapters) {
  let html = "";
  chapters.forEach((chapter) => {
    html += `<a href="#/">${chapter.title}</a>`;
  });
  navPlacement.innerHTML = html;
}


