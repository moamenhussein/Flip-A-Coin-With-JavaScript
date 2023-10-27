let flipCoinBtn = document.querySelector(".buttons .flipcoin");
let box = document.querySelector("#box");
let head = document.querySelector(".info .head");
let tail = document.querySelector(".info .tail");
let container = document.querySelector(".coin .container");
let reset = document.querySelector(".buttons .reset")
flipCoinBtn.addEventListener("click", () => {
  let headAndTail = ["tail", "head"];
  let rotate = headAndTail[Math.floor(Math.random() * headAndTail.length)];
  box.classList.add(rotate);
  if (box.classList.contains("tail")) {
    tail.innerHTML++;
  } else {
    head.innerHTML++;
  }
  if (tail.innerHTML == 8) {
    let div = document.createElement("div");
    div.classList.add("done");
    let divText = document.createTextNode("Tail Is Winner");
    div.appendChild(divText);
    container.appendChild(div);
    flipCoinBtn.classList.add("pointerevent")
  } else if (head.innerHTML == 8) {
    let div = document.createElement("div");
    div.classList.add("done");
    let divText = document.createTextNode("Head Is Winner");
    div.appendChild(divText);
    container.appendChild(div);
    flipCoinBtn.classList.add("pointerevent")
  }
  setTimeout(() => {
    box.classList.remove(rotate);
  }, 1000);
});

reset.addEventListener("click", () => {
  location.reload()
})