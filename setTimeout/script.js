//for fixed time out
// setTimeout(() => {
//     console.log('hello');
// }, 5000);

//for repetative timeout
// setInterval(() => {
//     console.log('hello');
// }, 1000)

var index = 0;

function show() {
  var slide = document.querySelectorAll(".slide");
  var dot = document.querySelectorAll(".dt");
  for (var i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
    dot[i].classList.remove("black");
  }

  slide[index].style.display = "block";
  dot[index].classList.add("black");
  index++;
  setTimeout(show, 2500);

  if (index == 4) {
    index = 0;
  }
}

show();
