let list = document.querySelectorAll("li");
for (const i of list) {
  i.classList.toggle("done");
  i.classList.toggle("todo");
}
