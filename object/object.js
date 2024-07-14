var student = {
  name: "abcd",
  rollno: 123,
  add: "surat",
  age: 27,
};

console.log(Object.keys(student))

console.log(Object.values(student))

console.log(Object.entries(student))

for([key,value] of object.entries(student)){
    console.log(key,value)
}
