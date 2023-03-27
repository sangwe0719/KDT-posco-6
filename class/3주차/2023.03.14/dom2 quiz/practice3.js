function cal() {
  const value1 = document.querySelector("#value1").value;
  const value2 = document.querySelector("#value2").value;
  const operator = document.querySelector("#operator");
  const result = document.querySelector("#result");

  const newoperator = operator.value;

  if (newoperator === "+") {
    result.value = parseInt(value1) + parseInt(value2);
  } else if (newoperator === "-") {
    result.value = parseInt(value1) - parseInt(value2);
  } else if (newoperator === "/") {
    result.value = parseInt(value1) / parseInt(value2);
  } else if (newoperator === "*") {
    result.value = parseInt(value1) * parseInt(value2);
  }
}
