const section = document.querySelector("section");
const icecreams = [
  "내가 아인슈페너?!",
  "엄마는 외계인",
  "민트 초콜릿 칩",
  "뉴욕 치즈케이크",
  "아이스 초당옥수수",
  "초콜릿 무스",
  "체리쥬빌레",
  "뮤! 넌 내거야",
  "오레오 쿠키 앤 크림",
];
for (let i = 1; i <= icecreams.length; i++) {
  let article = document.createElement("article");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let div = document.createElement("div");
  img.setAttribute("src", `./image/icecream${i}.png`);

  section.append(article);
  img.classList.add("img-box");
  article.classList.add("article-box");
  h3.classList.add("text-center");
  div.classList.add("text-center");

  console.log(article);
  article.prepend(img);
  article.append(h3);
  article.append(div);

  h3.innerHTML = `TOP ${i}`;
  div.innerHTML = icecreams[i - 1];
}
