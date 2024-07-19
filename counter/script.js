let index = 0;
let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let exit;
start.addEventListener("click", () => {
  exit = setInterval(() => {
    if (index < 10) {
      index++;
    } else {
      index = 0;
    }
    document.getElementById("count").innerHTML = index;
  }, 1000);
});

stop.addEventListener("click", () => {
  clearInterval(exit);
});

reset.addEventListener("click", () => {
  index = 0;
});
