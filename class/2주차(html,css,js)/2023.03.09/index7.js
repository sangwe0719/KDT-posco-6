for (let i = 0; i < 10; i++) {
  console.log("안녕", i);
}
console.log("===========");
for (let i = 0; i < 10; i += 2) {
  console.log(`안녕 ${i}`);
}

for (let i = 0; i < 10; i = i + 3) {
  console.log(i);
}

// 1부터 5까지 출력
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
for (let i = 1; i < 6; i++) {
  console.log(i);
}

// 5부터 1까지 출력
for (let i = 5; i > 0; i--) {
  console.log(i);
}

let n = 11;
let sum = 0;
// 1 부터 n까지의 합

for (let i = 1; i < n + 1; i++) {
  sum = sum + i;
}
console.log(sum);

/*배열과 for문 */
let fruits = ["사과", "배", "포도", "망고"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열 내의 숫자 합 구하기
let numsArr = [90, 50, 30, 20, 11];
let numsSum = 0;

for (let i = 0; i < numsArr.length; i++) {
  numsSum += numsArr[i];
}

console.log(numsSum);

// 1~20 짝수일 때의 합 구하기
let sum2 = 0;
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}

/*console.log(sum2);

answer = Number(prompt("숫자값을 입력하시오"));

for (let i = 0; i < 10000; i++) {
  if (i % 13 === 0 && i % 2 != 0) {
    console.log(i);
  }
}
*/

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${j} *${i} = ${j * i}`);
  }
  console.log("-----", j, "단------");
}
