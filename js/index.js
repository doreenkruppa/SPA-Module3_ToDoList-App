const form = document.querySelector("form");
const box = document.querySelector(".box");
const input = document.querySelector("input");
const btnCreate = document.querySelector("#create");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let text = input.value;
  let paragraph = document.createElement("p");
  let spanCloseButton = document.createElement("span");
  spanCloseButton.innerText = "X";
  paragraph.innerText = text;
  paragraph.appendChild(spanCloseButton);
  box.appendChild(paragraph);
  input.value = " ";
  spanCloseButton.addEventListener("click", () => {
    paragraph.remove();
  });
});

btnCreate.style =
  "width: 120px; height: 40px; background-color: #c6e2ff; margin-top: 20px; margin-bottom: 20px;";
input.style = "width: 50%; height: 3rem";
