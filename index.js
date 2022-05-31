let button = document.querySelector("#type");

function creatPass() {
  let passCharac = "123456789#*?$%/abcdefghj";
  let result = [];
  for (let i = 0; i < 8; i++) {
    result.push(passCharac[Math.floor(Math.random() * passCharac.length)]);
  }
  let p = result.join("");
  button.innerHTML = p;
}
