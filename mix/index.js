let user = prompt("enter fullname without space:");
// console.log(user)
let userName = `@${user}${user.length}`;
let h3 = document.createElement("h3");
h3.textContent = userName;
document.body.appendChild(h3);
// console.log(userName);