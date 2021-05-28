import React from "react";
import ReactDom from "react-dom";

const root = document.getElementById("app");

const element = (
  <div className="container">
    <p>Hello world</p>
  </div>
);

ReactDom.render(element, root);

/*
const element = React.createElement(
  "div",
  {
    className: "container"
  },
  "Hola mundo",
  "Hoy es Jueves"
);

ReactDom.render(element, root);
*/
/*

const root = document.getElementById("app");

const element = document.createElement("div");
element.className = "container";
element.textContent = "Hello world";

root.appendChild(element);
*/
