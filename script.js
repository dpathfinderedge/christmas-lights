
let circle = document.getElementsByClassName("circle");
let title = document.getElementById("title");
let play = document.getElementById("play");
let stop = document.getElementById("stop");
let len = circle.length;

let on = function() {
  for (let i = 0; i < len; i++) {
    circle[i].removeAttribute("style");
    circle[i].style.animationPlayState = "running";
    circle[i].style.WebkitAnimationPlayState = "running";
  }
}

let off = function() {
  title.style.animation = "none";

  for (let i = 0; i < len; i++) {
    circle[i].style.animation = "none";
    circle[i].style.background = "#563260";
  }
}

function change() {
  let speed = document.getElementById('quantity').value;

  for (let i = 0; i < len; i++) {
    circle[i].style.animationDuration = speed + "s";
  }
}

play.addEventListener("click", on);
stop.addEventListener("click", off);
