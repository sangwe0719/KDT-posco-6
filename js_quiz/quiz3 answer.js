let sum = 0;
let n = 0;
while (n < 100) {
  if (n % 2 === 0 || n % 3 === 0) {
    sum = sum + n;
  }
  n++;
}

console.log("1과 99까지 중에서 2 또는 3의 배수의 합:", sum);
