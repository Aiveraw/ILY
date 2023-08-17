var start = new Date(2023, 3, 6, 13, 13); // Month is 0-based, and time is set to 13:13
var dv = document.querySelector(".container");
var val = 0;
var ok = 2;

function timer() {
  var now = new Date();
  var t = now - start;
  var d = Math.floor(t / (1000 * 60 * 60 * 24));
  var h = Math.floor((t / (1000 * 60 * 60)) % 24);
  var m = Math.floor((t / (1000 * 60)) % 60);
  var s = Math.floor((t / 1000) % 60);

  document.getElementById("d").textContent = d;
  document.getElementById("h").textContent = h < 10 ? "0" + h : h;
  document.getElementById("m").textContent = m < 10 ? "0" + m : m;
  document.getElementById("s").textContent = s < 10 ? "0" + s : s;
}

function fadein() {
  if (val < 1) {
    val += 0.025;
    dv.style.opacity = val;
  } else {
    clearInterval(fadeinInterval);
    if (ok === 2) {
      ok += 1;
    }
  }
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
  if (ok === 2) {
    clearInterval(fadeInterval);
    fadeinInterval = setInterval(fadein, 50);
  }
}, 50);
