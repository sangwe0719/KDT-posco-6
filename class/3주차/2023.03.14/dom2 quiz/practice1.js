let button = document.querySelector("button");
let body = document.querySelector("body");
let h2 = document.querySelector("h2");
button.addEventListener("click", function () {
  let i = Math.floor(Math.random() * 255);
  let s = Math.floor(Math.random() * 255);
  let t = Math.floor(Math.random() * 255);
  console.log(body);
  body.style.backgroundColor = `rgb(${i},${s},${t})`;
  h2.style.backgroundColor = `rgb(${i},${s},${t})`;
});
