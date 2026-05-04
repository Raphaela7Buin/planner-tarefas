let dragged = null;

function adicionar() {
  let tarefa = document.getElementById("tarefa").value;

  if (tarefa === "") return;

  let card = document.createElement("div");
  card.className = "card";
  card.innerText = tarefa;

  card.draggable = true;

  card.addEventListener("dragstart", function () {
    dragged = card;
  });

  document.getElementById("a-fazer").appendChild(card);

  document.getElementById("tarefa").value = "";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  event.currentTarget.querySelector("div").appendChild(dragged);
}