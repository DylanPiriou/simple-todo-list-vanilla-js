const form = document.getElementById("form");
const input = document.getElementById("input");
const liste = document.querySelector("ul");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

function addTodo(todo) {
  const text = input.value;
  if (text !== "") {
    ajouterUneTache(text);
    input.value = "";
  }
}

function ajouterUneTache(text) {
  const todo = {
    text,
    id: Date.now(),
  };
  afficherListe(todo);
}

function afficherListe(todo) {
  const item = document.createElement("li");
  const content = document.createElement("span");
  content.innerText = todo.text;
  item.appendChild(content);
  liste.appendChild(item);
}
