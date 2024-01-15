import menu from "./menu.js";
let app = document.getElementById("app");
let temporaryContent = document.getElementById("temporaryContent");

// load layout file
const loadTemplate = () => {
  fetch("/template.html")
    .then((response) => response.text())
    .then((html) => {
      app.innerHTML = html;
      let contentTab = document.getElementById("contentTab");
      contentTab.innerHTML = temporaryContent.innerHTML;
      temporaryContent.innerHTML = null;
      menu();
      initApp();
    });
};
loadTemplate();
