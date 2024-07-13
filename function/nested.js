//nested function: making a function inside the function
//closure : function inside a function can access variables declared
// in outer function without declaring inside it
function out(num1) {
  var num2 = num1;

  function inner() {
    return num2 + 60;
  }
  // inner(10)
  return inner();
}
console.log(out(10));