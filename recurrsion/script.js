var sum = 1;
function hello(num) {
  if (num <= 5) {
    sum = sum * num;
    return hello(num + 1);
  } else {
    return sum;
  }
}

let result = hello(1);

console.log(result);
