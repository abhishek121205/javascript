function num() {}
try {
  num();
  console.log("num is there");
} catch (e) {
  console.log(e);
  console.log("num is not there");
} finally {
  console.log("end");
}