// variable function : when a variable is used  as a function then
// it is not reqiuired to give a name to that function.
let x = function (a, b) {
  return a * b;
};
let z = x(4, 10);

console.log(z + 10);