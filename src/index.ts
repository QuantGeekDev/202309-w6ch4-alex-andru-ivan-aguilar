import App from "./Components/App/App.js";

const body = document.querySelector("body")!;

const app = new App(body, "div", "container");

app.render();
