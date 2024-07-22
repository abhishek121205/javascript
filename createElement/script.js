let div = document.createElement("div");
div.id = "container";
div.className = "content";
div.textContent = "hell world!";

let h1 = document.createElement("h1");
h1.textContent = "hello! world";
div.appendChild(h1);
document.body.appendChild(div);

h1 = document.createElement("h1");
h1.textContent = "bye! world";
div.appendChild(h1);
