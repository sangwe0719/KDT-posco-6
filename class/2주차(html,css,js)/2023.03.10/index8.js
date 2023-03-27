/* 문자열 관련 함수 + 속성(length)*/
/*
    -toUpperCase(),toLowerCase()
    -trim()
    -indexOf()
    -replace(),replaceAll()
    -repeat()
*/

let str1 = "Strawberry Moon";
let str2 = "    Strawberry Moon    ";
// 문자열 인덱싱
console.log(str1[0]);
console.log(str1[0] + str2[12]);

// Sonny
console.log(str1[0] + str1[12] + str1[14] + str1[14] + str1[9]);
console.log(str1.length);
console.log(str2.length);
//매개변수 없는 함수
let msg = "Happy Birthday!";
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(str2.trim());
console.log(str2.trim().length);

let msg2 = "   hello world!!   ";
console.log(msg2.trim().toUpperCase());

// 매개변수 있는 함수
let fruit = "applemango";
console.log(fruit.indexOf("a"));
console.log(fruit.indexOf("apple"));
console.log(fruit.indexOf("x"));

console.log(fruit.charAt(3));

console.log(fruit.slice(5));
console.log(fruit.slice(3, 6));
console.log(fruit.slice(-3));

// console.log(fruit);
let msg3 = "Wow! It is so amazing!!";
console.log(msg3.replace("Wow", "Hey"));
console.log(msg3.replaceAll("o", "a"));
console.log(msg3.replaceAll("o", "a"));

let date = "23.03.10";
console.log(date.split("."));

console.log("hi".repeat(5));
//배열 Includes(요소) 요소가 있는지 없는지
// true false 반환

// ===================== 배열!!
// push, pop, unshift, shift -> 원본 배열 변화
// indexOf, join, reverse
  let arr1=[1,2,3,4,5];
  let arr2=['quakka','rabbit', 'puppy', 'hamster'];
  arr1[5] = 6;
  console.log(arr1);
  arr1[8] = 6; // 중간에 빈 값이 생길 수 있어요!!!
  console.log(arr1);
  arr1 = [1,2,3,4,5];
  arr1.push(6);
  a rr1.push(10);
  console.log(arr1.pop());
  console.log(arr1);
  arr2.unshift('cat');
  console.log(arr2.shift());
  console.log(arr2);
// 배열.includes(요소) 요소가 있는지 없는지 검사
// true false 반환
console.log(arr2.includes('quakka'));
console.log(arr2.indexOf('quakka'));
/* reverse */
console.log(arr1.reverse());
console.log(arr1); // 기존의 배열 변경시킴
/* join */
str1 = arr1.join('');
console.log(str1);

/*배열에서의 for */
// 기본 for 문
// for of 문
// forEach 함수 > 매개변수로 익명함수가 들어감

let arr3 = [1, 3, 5, 4, 6];
let alpabets = ["a", "b", "c", "d", "e"];

for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}

for (let number of arr3) {
  console.log(number);
}

arr3.forEach(function (data, index, arr) {
  console.log(data, index, arr);
});

arr3.forEach((data, index) => {
  console.log(data, index);
});

arr3.forEach(function (data) {
  console.log(data);
});

/*filter*/

console.log("-----");
let three = arr3.filter(function (num) {
  return num > 3;
});

console.log(three);

let arr2 = ["quakka", "rabbit", "puppy", "hamster"];

let six = arr2.filter(function (el) {
  return el.length >= 6;
});

console.log(arr2);

/* map,find */
// map : 배열내의 모든 원소에 대해 연산한 결과를 모아서 새로운 배열 변환
let arr4 = [1, 2, 3].map(function (el) {
  return el * 3;
});

console.log(arr4);

let arr5 = [1, 2, 3, 4, 5];
arr5 = arr5.map((num) => num * 10);

console.log(arr5);

// find: 특정 조건을 만족하는 첫번째 요소 변환
let findResult = arr5.find((num) => num >= 30);
console.log(findResult);

let arr = [];
for (i = 1; i < 101; i++) {
  arr.push(i);
}

console.log(arr);

let sum = 0;
for (let number of arr) {
  sum += number;
}

console.log(sum);

let sum2 = 0;
arr.forEach((number) => {
  sum2 += number;
});

console.log(sum2);

let same = [];
let dif = [];
let fruits1 = [
  "사과",
  "딸기",
  "파인애플",
  "수박",
  "참외",
  "오렌지",
  "자두",
  "망고",
];
let fruits2 = ["수박", "사과", "파인애플", "오렌지", "참외", "망고"];
for (i = 0; i < fruits1.length; i++) {
  if (fruits2.includes(fruits1[i])) {
    same.push(fruits1[i]);
  } else {
    dif.push(fruits1[i]);
  }
}
console.log(same);
console.log(dif);

/* filter 이용*/
let same2 = fruits1.filter((fruit) => fruits2.includes(fruit));
let dif2 = fruits1.filter((fruit) => !fruits2.includes(fruit));

console.log(same2);
console.log(dif2);
