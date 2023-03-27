let span = document.querySelector("span");
span.innerHTML = " 맛없다 ㅡㅡ;;";

let list = document.querySelectorAll("span");
for (let span of list) {
  span.style.color = "red";
}
