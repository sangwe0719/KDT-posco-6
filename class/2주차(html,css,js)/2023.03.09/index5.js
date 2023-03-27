console.log("안녕");
function helloworld1() {
  console.log("helloworld1");
}
helloworld1();
function helloworld2() {
  return "helloworld2";
}

helloworld2();
console.log(helloworld2());

function add(num1, num2) {
  console.log("안뇽");
  return num1 + num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function add2(num1, num2) {
  console.log(num1 + num2);
}

let result = add(5, 5);
let result2 = add2(5, 5);

// 2.함수 표현식
// 선언 전 호출 불가능
let helloworld3 = function () {
  console.log("helloworld3");
};
helloworld3();

//  3. 화살표함수
let helloworld4 = () => {
  console.log("helloworld4");
};
helloworld4();

// 매가변수가 있는 version!
function sayHello1(text) {
  return text;
}

console.log(sayHello1("안녕하세요"));

function multifly(num1, num2) {
  return num1 * num2;
}

console.log(multifly(3, 7));

//sauare

const square1 = function (a) {
  console.log(a ** 2);
};

square(5);

function square(num3) {
  return num3 * num3;
}

console.log(square(4));
