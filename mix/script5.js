// let marks = [99, 90, 45, 66, 98, 92, 95, 77, 80]

// let newArray = marks.filter((value) => {
//     return value >= 90;
// })

// console.log(newArray)

function exe() {
  let nArray = [];
  let num = document.getElementById("num").value;
  for (let i = 1; i <= num; i++) {
    nArray.push(i);
  }

  let output = nArray.reduce((prev, curr) => {
    // return prev + curr;
    return prev * curr;
  });
  console.log(nArray);
  console.log(output);
}