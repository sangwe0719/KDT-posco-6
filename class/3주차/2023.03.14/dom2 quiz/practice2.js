const userid = document.getElementById("userid");
const comment = document.getElementById("comment");
const commentlist = document.querySelector(".comment-list");
const submit = document.querySelector("form");

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  const newuserid = userid.value;
  const newcomment = comment.value;
  const newcommentlist = document.createElement("li");
  console.log(newuserid);

  newcommentlist.innerHTML = `${newuserid}-${newcomment}`;
  commentlist.append(newcommentlist);
  userid.value = "";
  comment.value = "";
});
