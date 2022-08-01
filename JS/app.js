import { ChangeColor, myArr, RandColor } from "./helpers.js";

let elem = document.querySelector("#root");
let myTitle = document.querySelector("h1");

let myForm = document.createElement("form");
let myInput = document.createElement("input");
let mySecInput = document.createElement("input");
let myThirdInput = document.createElement("input");
let myBtn = document.createElement("button");

myForm.setAttribute("method", "get");
myForm.setAttribute("onsubmit", "return false");
myInput.setAttribute("type", "number");
myInput.setAttribute("id", "firstI");
mySecInput.setAttribute("type", "number");
mySecInput.setAttribute("id", "secI");
myThirdInput.setAttribute("type", "number");
myThirdInput.setAttribute("id", "thirdI");
myBtn.setAttribute("type", "button");
myBtn.textContent = "Change Color";

myInput.placeholder = "give value to r :";
mySecInput.placeholder = "give value to g:";
myThirdInput.placeholder = "give value to b:";

elem.appendChild(myForm);
myForm.appendChild(myInput);
myForm.appendChild(mySecInput);
myForm.appendChild(myThirdInput);
myForm.appendChild(myBtn);

myBtn.addEventListener("click", () => {
  myTitle.style.backgroundColor = ChangeColor();
  myTitle.style.color = RandColor();
});

let mySelect = document.createElement("select");
document.body.appendChild(mySelect);

myArr.map((state) => {
  mySelect.innerHTML += `
  <div>
  <option>${state.country}</option>
  </div>`;
});

mySelect.addEventListener(
  "change",
  (selected) => (myTitle.textContent = "I love " + selected.target.value)
);
