// lenght
let x = "hello world ,,,,,.......";
let len = x.length;
console.log(len);

// slice
// slice(start, end)
// substring(start, end)
// substr(start, length)
let fruit = "apple, orange, watermelon";
let part = fruit.slice(0, 6);
console.log(part);

// replace() and replaceALL() for all words
function tryit() {
  let text = document.getElementById("txt").innerHTML;
  document.getElementById("txt").innerHTML = text.replace(
    "world",
    "watermelon"
  );
}

// toUpperCase() & toLowerCase()
let a = "hello world";
let b = a.toUpperCase();
console.log(a + " &", b);

// concat()
let c = "hello";
let d = "universe";
let e = c.concat(" " + d);
console.log(e);

//trim()
let a1 = "    hello     ";
let a2 = a1.trim();
console.log("a1 length= " + a1.length + " & a2 lenght= " + a2.length);