let myArray = [14, 8, 2, 6, 28];

let result = (value) => {
  console.log((value *= value));
};

myArray.forEach(result);
// console.log(result());