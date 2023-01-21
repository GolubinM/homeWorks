document.querySelector("#user-name").addEventListener("blur", (event) => {
  event.target.className = event.target.value.length >= 6 ? "success" : "error";
});
